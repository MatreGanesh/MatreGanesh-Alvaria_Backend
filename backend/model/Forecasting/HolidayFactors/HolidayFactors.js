// models/ForecastGroupMonthlyUpdate.js
const mongoose = require('mongoose');

const DetailSchema = new mongoose.Schema({
    ForecastGroup_Description: { type: String, required: true, },
    Description: { type: String, required: true, },
    Factor: { type: String, required: true, },
    Legal: { type: String, required: true, },
    Date: { type: Date, required: true, },
    Memo: { type: String, }
}, { timestamps: true });


const HolidayFactorsSchema = new mongoose.Schema({
    forecastGroup_Code: { type: String, required: true, unique: true }, // ✅ your original field preserved
    groups: [DetailSchema]
});



module.exports = mongoose.model('HolidayFactors', HolidayFactorsSchema);
