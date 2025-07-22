

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  ip: String,
  location: {
    latitude: Number,
    longitude: Number
  },
  permissions: Object,
  device: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
