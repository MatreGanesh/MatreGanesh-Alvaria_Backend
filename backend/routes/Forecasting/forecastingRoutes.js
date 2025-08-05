const express = require('express');
const router = express.Router();
const { createForecastingGroup, getAllForecastingScenarios, deleteForecastingScenarioByName,
    createFiscalPeriods, sendSelectedPeriods, getSelectedPeriods, saveFiscalVolumesToScenario,
    getUserFiscalVolumes, updateSuppliedVolumes
} = require('../../controller/Forecasting/forecastingController');

// POST create new forecasting scenario
router.post('/forecasting-scenarios-group', createForecastingGroup);

// GET all forecasting scenarios
router.get('/get-forecasting-scenarios-group', getAllForecastingScenarios);

// DELETE all forecasting scenarios by Group name
router.delete('/delete-forecasting-scenarios-group/:name', deleteForecastingScenarioByName);



// GET all created Fiscal Periods in FiscalPeriods.js
router.get('/forecasting-scenarios/get-fiscal-Periods', createFiscalPeriods);

// ✅ POST send and Save selected fiscal periods from FiscalPeriods to FiscalVolumeSelect.js
router.post('/forecasting-scenarios/send-selected-fiscal-periods', sendSelectedPeriods);



// ✅ GET all selected fiscal periods in FiscalVolumeSelect.js
router.get('/forecasting-scenarios/get-selected-fiscal-periods', getSelectedPeriods);

// routes/forecasting.js FiscalVolumeSelect
router.post('/forecasting-scenarios/send-all-fiscal-volumes', saveFiscalVolumesToScenario);



// GET /forecasting/fiscal-volumes?userId=RAJ_KUMAR
router.get('/forecasting-scenarios/get-fiscal-volumes', getUserFiscalVolumes);

//Update Supplied Volume from FiscalVolume.js
router.post('/forecasting-scenarios/update-supplied-volumes', updateSuppliedVolumes);


module.exports = router;
