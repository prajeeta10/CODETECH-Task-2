//registration.js
import express from 'express';
import { registerMember } from '../controllers/usercontroller.js';

const regrouter = express.Router();

// Route to handle registration requests
regrouter.post('/', registerMember);

export default regrouter;
