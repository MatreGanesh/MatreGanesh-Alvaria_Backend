const Ewfm = require("../model/Ewfm");
const RoutingSet = require("../model/RoutingSet")

const addEwfmData = async (req, res) => {
  try {
    const entries = req.body;

    if (!Array.isArray(entries) || entries.length === 0) {
      return res
        .status(400)
        .json({ message: "Request body must be a non-empty array" });
    }

    const savedEntries = [];

    for (const entry of entries) {
      const { EWFMDdeptCode, EWFMDdeptName, RoutingSet, Cases, Voice } = entry;

      if (!EWFMDdeptCode || !EWFMDdeptName || !RoutingSet || !Cases || !Voice) {
        return res
          .status(400)
          .json({ message: "All fields are required for each entry" });
      }

      const newEntry = new Ewfm({
        EWFMDdeptCode,
        EWFMDdeptName,
        RoutingSet,
        Cases,
        Voice,
      });

      const savedEntry = await newEntry.save();
      savedEntries.push(savedEntry);
    }

    return res.status(201).json(savedEntries);
  } catch (error) {
    console.error("Error adding data:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
const getEwfmData = async (req, res) => {
  try {
    const { routingSet } = req.body;

    if (!routingSet) {
      return res
        .status(400)
        .json({ message: "RoutingSet query parameter is required" });
    }

    const results = await Ewfm.find({ RoutingSet: routingSet });

    if (results.length === 0) {
      return res
        .status(404)
        .json({ message: "No records found for the provided RoutingSet" });
    }

    return res.status(200).json(results);
  } catch (error) {
    console.error("Error retrieving data:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const addRoutingSet = async (req, res) => {
  try {
    const { routingSet, user } = req.body;

    // Retrieve records from Ewfm model based on the provided routingSet
    const ewfmData = await Ewfm.find({ RoutingSet: routingSet });

    // If no records are found, return a 404 response
    if (!ewfmData || ewfmData.length === 0) {
      return res
        .status(404)
        .json({ message: 'No records found for the provided RoutingSet' });
    }

    // Prepare case details from the retrieved Ewfm data
    const caseDetails = ewfmData.map((record) => ({
      EWFMDdeptName: record.EWFMDdeptName,
      RoutingSet: routingSet,
      start_date: new Date(),
      end_date: new Date(Date.now() + 24 * 60 * 60 * 1000), // Adds 1 day
      created_date: new Date(),
      created_by: user,
    }));

    // Check if a RoutingSet document with the given routingSet already exists
    let existingRoutingSet = await RoutingSet.findOne({ RoutingSet: routingSet });

    if (existingRoutingSet) {
      // If it exists, append the new case details
      existingRoutingSet.cases_detail.push(...caseDetails);
      await existingRoutingSet.save();
    } else {
      // If it doesn't exist, create a new RoutingSet document
      const newRoutingSet = new RoutingSet({
        EWFMDdeptCode: ewfmData[0].EWFMDdeptCode,
        RoutingSet: routingSet,
        cases_detail: caseDetails,
      });
      await newRoutingSet.save();
    }

    // Return a success response
    return res.status(200).json({ message: 'RoutingSet updated successfully' });
  } catch (error) {
    console.error('Error processing RoutingSet:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const getAllRoutingSets = async (req, res) => {
  try {
    const routingSets = await RoutingSet.find();
    res.status(200).json(routingSets);
  } catch (error) {
    console.error('Error fetching RoutingSets:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteIDP = async (req, res) => {
  try {
    // Get the caseDetail object from the request body
    const { caseDetail } = req.body;
    console.log('Received case details:', caseDetail);

    // Validate that the caseDetail object contains the necessary information (e.g., id)
    if (!caseDetail || !caseDetail._id || !caseDetail.RoutingSet) {
      return res.status(400).json({ message: 'Invalid case detail data provided' });
    }

    // Find the routing set by its RoutingSet code
    const routingSet = await RoutingSet.findOne({ RoutingSet: caseDetail.RoutingSet });

    if (!routingSet) {
      return res.status(404).json({ message: 'Routing set not found' });
    }

    // Remove the specific case detail from the routing set
    const index = routingSet.cases_detail.findIndex(
      (item) => item._id.toString() === caseDetail._id.toString()
    );

    if (index === -1) {
      return res.status(404).json({ message: 'Case detail not found in this routing set' });
    }

    // Remove the case detail by pulling it from the array
    routingSet.cases_detail.splice(index, 1);

    // Save the updated routing set
    await routingSet.save();

    return res.status(200).json({ message: 'Case detail deleted successfully' });
  } catch (error) {
    console.error('Error deleting case detail:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { deleteIDP };


module.exports = {
  addEwfmData,
  getEwfmData,
  addRoutingSet,
  getAllRoutingSets,
  deleteIDP
};
