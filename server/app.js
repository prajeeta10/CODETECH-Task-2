import express from "express";
import cors from 'cors';
import connectdb from "./database/connection.js";
import bodyParser from "body-parser";
import { registerMember, loginMember } from "./controllers/usercontroller.js";
import regrouter from './routes/registration.js'; 
import logrouter from './routes/login.js';
import path from 'path'; // Import the path module

const app = express();
const port = 3006; 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectdb();

// Define routes
app.use('/register', regrouter);
app.use('/login', logrouter);

// Serve static files from the 'client' directory
const __dirname = new URL('.', import.meta.url).pathname;
app.use(express.static(path.join(__dirname, 'client')));

// Define a catch-all route to serve 'memberdashboard.html'
app.get('/memberdashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'memberdashboard'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
