const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Geolocation Schema
const geoSchema = new Schema({
  type: { type: String, default: 'Point' },
  coordinates: { type: [Number], index: '2dsphere' }
});

// Developer Schema
const developerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    lowercase: true
  },
  available: {
    type: Boolean,
    required: [true, 'Availability required'],
    default: false
  },
  skills: { type: Array, required: [true, 'Skills required'] },
  age: Number,
  geometry: geoSchema
});

const Developer = mongoose.model('developer', developerSchema);

module.exports = Developer;
