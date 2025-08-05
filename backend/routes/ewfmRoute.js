const express = require('express');
const router = express.Router();

const { addEwfmData,getEwfmData,addRoutingSet,getAllRoutingSets,deleteIDP} = require('../controller/ewfmController'); // Adjust the path as necessary

// Define the route for adding schedules
router.post('/addewfm', addEwfmData);
router.post('/getewfmdata', getEwfmData);

// routinbg set model
router.post('/addinroutingset',addRoutingSet)
router.get('/fetchallroutingset',getAllRoutingSets)
router.post('/deleteewfmIDP',deleteIDP)


module.exports = router;