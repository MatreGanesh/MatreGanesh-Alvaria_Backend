const mongoose = require('mongoose');

const EwfmdSchema = new mongoose.Schema({
  EWFMDdeptCode: {
    type: String,
    required: true,
    trim: true
  },
  EWFMDdeptName: {
    type: String,
    required: true,
    trim: true
  },
  RoutingSet: {
    type: String,
    required: true,
    trim: true
  },
  Cases: {
    type: String,
    required: true,
    trim: true
  },
  Voice: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

const Ewfm = mongoose.model('Ewfmd', EwfmdSchema);
module.exports = Ewfm;
