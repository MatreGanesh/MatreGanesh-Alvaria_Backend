const express = require('express');
const router = express.Router();
const { addSchedules, getAllSchedules, getScheduleByDateAndEmployee,
    getWeeklySchedule, getMonthlySchedule, getAllSchedulesByName, deleteAllSchedules, updateShiftScheduler } = require('../controller/scheduleController'); // Adjust the path as necessary

// Define the route for adding schedules
router.post('/addschedules', addSchedules);
router.get('/getschedules', getAllSchedules);
router.get('/:date/:employeeName', getScheduleByDateAndEmployee);
router.get('/weekly/:weekStart/:employeeName', getWeeklySchedule);
router.get('/monthly/:month/:year/:employeeName', getMonthlySchedule);

router.get('/all/:selectedDate/:employeeName', getAllSchedulesByName);
router.delete('/delete', deleteAllSchedules); // Use DELETE method
router.post('/update', updateShiftScheduler)

module.exports = router;