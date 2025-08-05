const express = require('express');
const router = express.Router();

const { createMonthlyPatternUpdates, getMonthlyPatternUpdates } = require('../../controller/Forecasting/MonthlyPatternController')


//Create monthly pattern updates group code and groups 
router.post('/monthly-pattern-updates', createMonthlyPatternUpdates);

// GET all  monthly pattern updates group code and groups 
router.get('/get-monthly-pattern-updates', getMonthlyPatternUpdates);


module.exports = router;