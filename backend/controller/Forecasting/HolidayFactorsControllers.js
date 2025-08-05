const HolidayFactors = require('../../model/Forecasting/HolidayFactors/HolidayFactors');


//Create monthly pattern updates group code and groups 
const createHolidayFactors = async (req, res) => {
    try {
        const { forecastGroup_Code, groups } = req.body;

        if (!forecastGroup_Code || !Array.isArray(groups)) {
            return res.status(400).json({ message: 'Invalid payload. Provide "forecastGroup_Code" and an array of "groups".' });
        }

        // Try to update existing group by pushing new entries
        const updated = await HolidayFactors.findOneAndUpdate(
            { forecastGroup_Code },
            { $push: { groups: { $each: groups } } },
            { new: true }
        );

        if (updated) {
            return res.status(200).json({
                success: true,
                message: 'Holiday Factors updated successfully',
                updatedGroup: updated
            });
        }

        // If not found, create a new one
        const newGroup = new HolidayFactors({ forecastGroup_Code, groups });
        const savedGroup = await newGroup.save();

        res.status(201).json({ success: true, message: 'Holiday Factors created successfully', savedGroup });

    } catch (error) {
        console.error('Error creating or updating Holiday Factors:', error);
        res.status(500).json({
            success: false,
            message: 'Error processing Holiday Factors',
            error: error.message
        });
    }
};


// GET all forecasting scenarios
const getHolidayFactors = async (req, res) => {
    try {
        const HolidayFactor = await HolidayFactors.find();

        if (!HolidayFactor || HolidayFactor.length === 0) {
            return res.status(404).json({ message: "No Holiday Factors found." });
        }

        res.status(200).json({ success: true, count: HolidayFactor.length, data: HolidayFactor, });
    } catch (error) {
        console.error("Error fetching Holiday Factors:", error.message);
        res.status(500).json({ success: false, message: 'Server error while fetching Holiday Factors.', });
    }
};


module.exports = { createHolidayFactors, getHolidayFactors }