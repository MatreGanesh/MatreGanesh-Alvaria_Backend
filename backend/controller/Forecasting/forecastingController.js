const ForecastingScenario = require('../../model/Forecasting/ForecastingScenario/ForecastingScenario');
const SelectedFiscalPeriod = require('../../model/Forecasting/ForecastingScenario/SelectedFiscalPeriod');


// POST a new forecasting group scenarios
const createForecastingGroup = async (req, res) => {
    try {
        const { name, groups } = req.body;

        if (!name || !groups || !Array.isArray(groups)) {
            return res.status(400).json({ message: 'Invalid payload. Provide "name" and an array of "groups".' });
        }

        const newGroup = new ForecastingScenario({ name, groups });

        const savedGroup = await newGroup.save();
        res.status(201).json(savedGroup);

    } catch (error) {
        console.error('Error creating forecasting group:', error);
        res.status(500).json({ message: 'Error creating forecasting group', error: error.message });
    }
};

// GET all forecasting scenarios
const getAllForecastingScenarios = async (req, res) => {
    try {
        const scenarios = await ForecastingScenario.find();

        if (!scenarios || scenarios.length === 0) {
            return res.status(404).json({ message: "No forecasting scenarios found." });
        }

        res.status(200).json({
            success: true,
            count: scenarios.length,
            data: scenarios,
        });
    } catch (error) {
        console.error("Error fetching forecasting scenarios:", error.message);
        res.status(500).json({
            success: false,
            message: 'Server error while fetching forecasting scenarios.',
        });
    }
};


// DELETE a forecasting scenario by group 'name'
const deleteForecastingScenarioByName = async (req, res) => {
    const { name } = req.params;

    try {
        const result = await ForecastingScenario.deleteOne({ name });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: `No document found with name: ${name}` });
        }

        res.status(200).json({
            message: `Forecasting scenario "${name}" deleted successfully`,
            deletedCount: result.deletedCount
        });
    } catch (error) {
        console.error('Error deleting scenario by name:', error);
        res.status(500).json({ message: 'Failed to delete scenario', error: error.message });
    }
};


//Create a Forecasting Fiscal Perios as per Fiscal Weeks 5-May-2025 to 30-Dec-2029 in FiscalPeriods.js
const createFiscalPeriods = (req, res) => {
    try {
        const startDate = new Date('2025-05-05');
        const endDate = new Date('2029-12-31');

        const formatDate = (date) => {
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const year = date.getFullYear();
            return `${month}/${day}/${year}`;
        };

        const periods = [];
        let currentStart = new Date(startDate);

        while (currentStart <= endDate) {
            const currentEnd = new Date(currentStart);
            currentEnd.setDate(currentEnd.getDate() + 6);

            if (currentEnd > endDate) break;

            periods.push({
                from: formatDate(currentStart),
                to: formatDate(currentEnd),
            });

            currentStart.setDate(currentStart.getDate() + 7);
        }

        res.status(200).json({
            success: true,
            count: periods.length,
            data: periods
        });
    } catch (error) {
        console.error('Error to creating Fiscal Periods:', error);
        res.status(500).json({ message: 'Failed to  creating Fiscal Periods', error: error.message });
    }
}


//Send selected Fiscal Periods from FiscalPeriods.js to FiscalVolumeSelect.js
const sendSelectedPeriods = async (req, res) => {
    console.log("Saving selected periods:", req.body);

    try {
        const { periods, userId } = req.body;

        let existing = await SelectedFiscalPeriod.findOne({ userId });

        if (existing) {
            const existingPeriods = existing.periods;

            // Filter only new periods that do not exist
            const newPeriods = periods.filter(p =>
                !existingPeriods.some(ep => ep.from === p.from && ep.to === p.to)
            );

            if (newPeriods.length === 0) {
                return res.status(200).json({
                    success: false,
                    message: "All selected periods already exist for this user. Nothing new to add."
                });
            }

            // Push new periods to existing document
            existing.periods.push(...newPeriods);
            await existing.save();

            return res.status(200).json({
                success: true,
                message: "New fiscal periods added successfully.",
                added: newPeriods
            });
        } else {
            // No existing document, create a new one
            const saved = await SelectedFiscalPeriod.create({ periods, userId });

            return res.status(200).json({
                success: true,
                message: "Selected fiscal periods saved successfully.",
                data: saved
            });
        }

    } catch (err) {
        console.error('Error saving selected periods:', err);
        return res.status(500).json({
            success: false,
            message: "Server error while saving selected fiscal periods.",
            error: err.message
        });
    }
};

//Get selectd Fiscal Periods to FiscalVolumeSelect.js
const getSelectedPeriods = async (req, res) => {
    try {
        const userId = req.query.userId;

        let query = {};
        if (userId) {
            query.userId = userId;
        }

        const data = await SelectedFiscalPeriod.find(query);

        res.json({ success: true, data });
    } catch (error) {
        console.error('Error fetching selected periods:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};


//add Fiscal Volume from FiscalVolumeSelect.js to FiscalVolume.js and remove all by sending from FiscalVolumeSelect.
const saveFiscalVolumesToScenario = async (req, res) => {
    try {
        const { userId, forecastingGroupName, scenarioId } = req.body;
        console.log("Incoming request:", { userId, forecastingGroupName, scenarioId });

        if (!userId || !forecastingGroupName || !scenarioId) {
            return res.status(400).json({
                success: false,
                message: "Missing userId, forecastingGroupName, or scenarioId."
            });
        }

        const selected = await SelectedFiscalPeriod.findOne({ userId });

        if (!selected || !selected.periods.length) {
            return res.status(404).json({
                success: false,
                message: "No fiscal periods selected for this user."
            });
        }

        const newPeriods = selected.periods.map(p => ({
            start_date: p.from,
            stop_date: p.to,
            supplied_volume: ""
        }));

        const scenarioDoc = await ForecastingScenario.findOne({ name: forecastingGroupName });

        if (!scenarioDoc) {
            return res.status(404).json({ success: false, message: "Forecasting group not found." });
        }

        const targetGroup = scenarioDoc.groups.find(
            g => g.Updated_By?.trim().toLowerCase() === userId.trim().toLowerCase()
        );

        if (!targetGroup) {
            return res.status(404).json({ success: false, message: "Matching group not found for this user." });
        }

        // Find existing FiscalVolume entry for the user
        let userVolumeEntry = targetGroup.FiscalVolumes.find(fv => fv.userId === userId);

        if (!userVolumeEntry) {
            // No entry for this user yet, create one
            targetGroup.FiscalVolumes.push({
                userId,
                periods: newPeriods
            });
        } else {
            // Get existing keys to compare
            const existingKeys = new Set(
                userVolumeEntry.periods.map(p => `${p.start_date}_${p.stop_date}`)
            );

            // Filter only new periods
            const filtered = newPeriods.filter(p => {
                const key = `${p.start_date}_${p.stop_date}`;
                return !existingKeys.has(key);
            });

            // Append only new ones
            userVolumeEntry.periods.push(...filtered);
        }

        await scenarioDoc.save();
        await SelectedFiscalPeriod.deleteOne({ userId });

        return res.status(200).json({
            success: true,
            message: "Fiscal volumes saved (duplicates skipped).",
            data: targetGroup.FiscalVolumes
        });

    } catch (error) {
        console.error("🔥 Error saving fiscal volumes:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

//Get all Fiscal Volumes in FiscalVoumse.js
const getUserFiscalVolumes = async (req, res) => {
    try {
        const { userId } = req.query;

        if (!userId) {
            console.log("❌ Missing userId");
            return res.status(400).json({ success: false, message: "Missing userId in query" });
        }

        const allScenarios = await ForecastingScenario.find();

        let matchedUserFound = false;
        let matchedFiscalVolumes = [];

        allScenarios.forEach((scenario) => {
            scenario.groups.forEach((group) => {
                if (group.Updated_By?.trim().toLowerCase() === userId.trim().toLowerCase()) {
                    matchedUserFound = true;
                    // Flatten all periods into one array
                    group.FiscalVolumes.forEach(fv => {
                        if (fv.periods && Array.isArray(fv.periods)) {
                            matchedFiscalVolumes.push(...fv.periods);
                        }
                    });
                }
            });
        });

        if (!matchedUserFound || matchedFiscalVolumes.length === 0) {
            console.log("❌ No match found for user:", userId);
            return res.status(404).json({ success: false, message: "No fiscal volumes found for the user." });
        }

        // ✅ Sort all periods by start_date
        matchedFiscalVolumes.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));

        // console.log("✅ Sorted fiscal volumes:", JSON.stringify(matchedFiscalVolumes, null, 2));

        return res.status(200).json({
            success: true,
            message: "Fiscal volumes fetched and sorted successfully.",
            data: matchedFiscalVolumes
        });

    } catch (error) {
        console.error("🔥 Error fetching user fiscal volumes:", error);
        return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
};


//Update Supplied Volume from FiscalVolume.js
const updateSuppliedVolumes = async (req, res) => {
    try {
        const { userId, volumes } = req.body;

        if (!userId || !Array.isArray(volumes)) {
            return res.status(400).json({ success: false, message: "Missing or invalid data" });
        }

        const scenarios = await ForecastingScenario.find();

        let updated = false;

        for (const scenario of scenarios) {
            for (const group of scenario.groups) {
                if (group.Updated_By?.trim().toLowerCase() === userId.trim().toLowerCase()) {
                    group.FiscalVolumes.forEach(fv => {
                        if (fv.userId === userId) {
                            // Update supplied_volume where matching start/stop dates
                            fv.periods.forEach(period => {
                                const match = volumes.find(v => v.start_date === period.start_date && v.stop_date === period.stop_date);
                                if (match) {
                                    period.supplied_volume = match.supplied_volume;
                                }
                            });
                            updated = true;
                        }
                    });
                }
            }

            if (updated) {
                await scenario.save();
            }
        }

        if (!updated) {
            return res.status(404).json({ success: false, message: "No matching scenario found." });
        }

        return res.status(200).json({ success: true, message: "Supplied volumes updated." });

    } catch (error) {
        console.error("Error updating supplied volumes:", error);
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};




module.exports = {
    createForecastingGroup, getAllForecastingScenarios, deleteForecastingScenarioByName,
    createFiscalPeriods, sendSelectedPeriods, getSelectedPeriods, saveFiscalVolumesToScenario,
    getUserFiscalVolumes, updateSuppliedVolumes
};
