// login.js

import express from 'express';
import { loginMember } from '../controllers/usercontroller.js';

const logrouter = express.Router();

// Route to handle login requests
logrouter.post('/', loginMember);

export default logrouter;
