const mongoose = require('mongoose');

const caseDetailSchema = new mongoose.Schema({
  EWFMDdeptName: {
    type: String,
    required: true,
    trim: true,
  },
  RoutingSet: {
    type: String,
    required: true,
    trim: true,
  },
   start_date: {
    type: Date,
    default: Date.now,
  },
 end_date: {
  type: Date,
  default: () => new Date(Date.now() + 24 * 60 * 60 * 1000), // Adds 1 day
},
  created_date: {
    type: Date,
    default: Date.now,
  },
  created_by: {
    type: String,
  },
});

const routingSetSchema = new mongoose.Schema({
  EWFMDdeptCode: {
    type: String,
    required: true,
    trim: true,
  },
  RoutingSet: {
    type: String,
    required: true,
    trim: true,
  },
  cases_detail: [caseDetailSchema],
});

const routeSchema = mongoose.model('routingSetSchema', routingSetSchema);
module.exports = routeSchema;
