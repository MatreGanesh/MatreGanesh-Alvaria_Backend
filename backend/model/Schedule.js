const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema({
    date: { type: String, required: true },
    title: { type: String, required: true },
    public: { type: String },
    shiftContainer: { type: String },
    shiftStart: { type: String, },
    shiftStop: { type: String, },
    Vacation: { type: String }
});

const scheduleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    shift_schedule: [shiftSchema] // Array of shift schedules
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;