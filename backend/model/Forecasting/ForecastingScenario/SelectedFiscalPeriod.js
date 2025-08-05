// models/SelectedFiscalPeriod.js
const mongoose = require('mongoose');

const SelectedFiscalPeriodSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    periods: [
        {
            from: String,
            to: String,
        }
    ],
}, { timestamps: true });

module.exports = mongoose.model('SelectedFiscalPeriod', SelectedFiscalPeriodSchema);
