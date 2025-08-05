const mongoose = require('mongoose');

const FiscalVolumeSchema = new mongoose.Schema({
    userId: String,
    periods: [
        {
            start_date: String,
            stop_date: String,
            supplied_volume: Number
        }
    ],
    createdAt: { type: Date, default: Date.now }
}, { _id: false }); // no separate ID needed per fiscal volume

const DetailSchema = new mongoose.Schema({
    ForecastGroup_Description: { type: String, required: true },
    Default: { type: Boolean, required: true },
    Code: { type: String },
    Scenario_Description: { type: String, required: true },
    Forecasting_Basis: { type: String, required: true },
    Staffing_Basis: { type: String, required: true },
    Multi_Channel_Staffing_Basis: { type: String, required: true },
    Fiscal_Calendar: { type: String, required: true },
    Updated_By: { type: String, required: true },
    Updated_On: { type: String, required: true },
    FiscalVolumes: [FiscalVolumeSchema] // ✅ ADDED field for storing periods
}, { _id: true });

const ForecastingGroupSchema = new mongoose.Schema({
    name: { type: String, required: true }, // ✅ your original field preserved
    groups: [DetailSchema]
});

module.exports = mongoose.model('ForecastingScenario', ForecastingGroupSchema);
