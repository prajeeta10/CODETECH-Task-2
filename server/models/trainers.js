// Trainer Schema
const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  tname: {
    type: String,
    required: true
  },
  tcontact: {
    type: String,
    required: true
  },
  temail: {
    type: String,
    required: true,
    unique: true
  },
  specialization: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  }
});

const Trainer = mongoose.model('Trainer', trainerSchema);
export default Trainer;


