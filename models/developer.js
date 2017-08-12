const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  age: Number
});

const Developer = mongoose.model('developer', developerSchema);

module.exports = Developer;
