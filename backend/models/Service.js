const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: String,
  url: String,
  status: String,
  lastChecked: Date,
});

module.exports = mongoose.model('Service', ServiceSchema);