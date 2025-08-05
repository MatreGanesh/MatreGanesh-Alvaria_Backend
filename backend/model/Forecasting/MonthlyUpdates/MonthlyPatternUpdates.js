// models/ForecastGroupMonthlyUpdate.js
const mongoose = require('mongoose');

const DetailSchema = new mongoose.Schema({
    ForecastGroup_Description: { type: String, required: true, },
    Month: {
        type: String, required: true,
        enum: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ],
    },
    Year: { type: Number, required: true, },
    UpdatedBy: { type: String, required: true, },
    UpdatedOn: { type: Date, required: true, default: Date.now, }
}, { timestamps: true });


const MonthlyUpdateSchema = new mongoose.Schema({
    forecastGroup_Code: { type: String, required: true }, // ✅ your original field preserved
    groups: [DetailSchema]
});



module.exports = mongoose.model('MonthlyPatternUpdates', MonthlyUpdateSchema);
