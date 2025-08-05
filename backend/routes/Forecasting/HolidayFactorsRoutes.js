const express = require('express');
const router = express.Router();

const { createHolidayFactors, getHolidayFactors } = require('../../controller/Forecasting/HolidayFactorsControllers')


//Create monthly pattern updates group code and groups 
router.post('/holiday-factors', createHolidayFactors);

// GET all  monthly pattern updates group code and groups 
router.get('/get-holiday-factors', getHolidayFactors);


module.exports = router;