//member.js
import mongoose from 'mongoose';

const MemberSchema = new mongoose.Schema({
    name: 
    {
         type: String,
         required: true },

    contact: 
    { 
        type: String, 
        required: true },

    email: 
    { 
        type: String, 
        required: true, 
        unique: true },

    username: 
    { 
        type: String, 
        required: true, 
        unique: true },

    password: 
    { 
        type: String, 
        required: true }
});


const Member = mongoose.model('Member', MemberSchema);

export default Member;


