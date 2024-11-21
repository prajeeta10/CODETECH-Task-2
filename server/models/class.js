// Define the Class Schema
const mongoose = require('mongoose');

import Trainer from "./trainers";
const classSchema = new mongoose.Schema({
    cname: {
      type: String,
      required: true
    },
    start: {
      type: Date,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    trainer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Trainer
    }
  });

  const Class = mongoose.model('Class', classSchema);
  export default Class;
  