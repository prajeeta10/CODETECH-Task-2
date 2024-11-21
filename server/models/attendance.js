// models/attendanceModel.js
import mongoose from 'mongoose'
import Member from './member';
import Class from './class';
const attendanceSchema = new mongoose.Schema({
  memberid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Member
  },
  class: {
    type : mongoose.Schema.Types.ObjectId,
    ref : Class
  },
  date: {
    type: Date,
    required: true
  },
  present: {
    type: Boolean,
    required : true,
    default: false // absent
  }
});

export const Attendance = mongoose.model('Attendance', attendanceSchema);
export default Attendance;
