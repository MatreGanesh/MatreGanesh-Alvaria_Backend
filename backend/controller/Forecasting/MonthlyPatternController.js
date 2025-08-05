const MonthlyPatternUpdates = require('../../model/Forecasting/MonthlyUpdates/MonthlyPatternUpdates');
const moment = require('moment');

//Create monthly pattern updates group code and groups 
const createMonthlyPatternUpdates = async (req, res) => {
    // try {
    //     const { forecastGroup_Code, groups } = req.body;
    //     console.log(forecastGroup_Code, groups)

    //     if (!forecastGroup_Code || !groups || !Array.isArray(groups)) {
    //         return res.status(400).json({ message: 'Invalid payload. Provide "name" and an array of "groups".' });
    //     }

    //     const newGroup = new MonthlyPatternUpdates({ forecastGroup_Code, groups });

    //     const savedGroup = await newGroup.save();

    //     res.status(201).json({ success: true, message: 'Forecasting group created successfully', savedGroup });

    // } catch (error) {
    //     console.error('Error creating forecasting group:', error);
    //     res.status(500).json({ success: false, message: 'Error creating forecasting group', error: error.message });
    // }
    try {
        const { forecastGroup_Code, groups } = req.body;

        if (!forecastGroup_Code || !Array.isArray(groups) || groups.length === 0) {
            return res.status(400).json({ message: 'Invalid payload. Provide "forecastGroup_Code" and valid "groups".' });
        }

        const currentMonth = moment().startOf('month');
        const errors = [];
        const validGroups = [];
        const autoAddedGroups = [];

        for (const group of groups) {
            const groupMonthMoment = moment(`${group.Month} ${group.Year}`, 'MMMM YYYY').startOf('month');

            // ❌ Reject future months
            if (groupMonthMoment.isAfter(currentMonth)) {
                errors.push(`❌ Future month not allowed: ${group.Month} ${group.Year}`);
                continue;
            }

            // ✅ Add current group
            validGroups.push(group);

            // 🧠 If it's in the past, add the next month as well
            const isPastMonth = groupMonthMoment.isBefore(currentMonth);
            if (isPastMonth) {
                const nextMonthMoment = moment(groupMonthMoment).add(1, 'month');
                if (nextMonthMoment.isAfter(currentMonth)) {
                    errors.push(`⚠️ Skipped auto-add of ${nextMonthMoment.format('MMMM YYYY')} because it's in the future.`);
                } else {
                    autoAddedGroups.push({
                        ForecastGroup_Description: group.ForecastGroup_Description,
                        Month: nextMonthMoment.format('MMMM'),
                        Year: nextMonthMoment.year(),
                        UpdatedBy: group.UpdatedBy,
                        UpdatedOn: new Date()
                    });
                }
            }

            // ❌ If it's current month, do not auto-add next month
            if (groupMonthMoment.isSame(currentMonth)) {
                errors.push(`⚠️ ${group.Month} is current month — next month not auto-added.`);
            }
        }

        const allGroupsToAdd = [...validGroups, ...autoAddedGroups];

        if (allGroupsToAdd.length === 0) {
            return res.status(400).json({ message: 'No valid groups to add.', errors });
        }

        let existing = await MonthlyPatternUpdates.findOne({ forecastGroup_Code });

        if (!existing) {
            const newGroup = new MonthlyPatternUpdates({
                forecastGroup_Code,
                groups: allGroupsToAdd
            });
            await newGroup.save();

            return res.status(201).json({
                success: true,
                message: '✅ New forecasting group created successfully.',
                autoAdded: autoAddedGroups.length,
                warnings: errors
            });
        }

        // Prevent duplicates
        const existingKeys = new Set(
            existing.groups.map(g => `${g.ForecastGroup_Description}_${g.Month}_${g.Year}`)
        );

        const newGroups = [];
        allGroupsToAdd.forEach(group => {
            const key = `${group.ForecastGroup_Description}_${group.Month}_${group.Year}`;
            if (!existingKeys.has(key)) {
                newGroups.push(group);
            } else {
                errors.push(`⚠️ Duplicate skipped: ${group.ForecastGroup_Description} for ${group.Month} ${group.Year}`);
            }
        });

        if (newGroups.length > 0) {
            existing.groups.push(...newGroups);
            await existing.save();

            return res.status(200).json({
                success: true,
                message: '✅ Monthly pattern updated successfully.',
                added: newGroups.length,
                autoAdded: autoAddedGroups.length,
                warnings: errors
            });
        } else {
            return res.status(409).json({
                success: false,
                message: '❌ No new data added — all groups already exist or are invalid.',
                warnings: errors
            });
        }

    } catch (error) {
        console.error('Error in create Monthly Pattern Updates:', error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
}

// GET all forecasting scenarios
const getMonthlyPatternUpdates = async (req, res) => {
    try {
        const monthlyUpdates = await MonthlyPatternUpdates.find();

        if (!monthlyUpdates || monthlyUpdates.length === 0) {
            return res.status(404).json({ message: "No Monthly Updates found." });
        }

        res.status(200).json({ success: true, count: monthlyUpdates.length, data: monthlyUpdates, });
    } catch (error) {
        console.error("Error fetching Monthly Updates:", error.message);
        res.status(500).json({ success: false, message: 'Server error while fetching Monthly Updates.', });
    }
};


module.exports = { createMonthlyPatternUpdates, getMonthlyPatternUpdates }