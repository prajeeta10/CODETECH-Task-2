// usercontroller.js

import Member from '../models/member.js';
import { hashPassword, comparePassword } from '../database/hashedpass.js';

// Controller function to handle member registration
export const registerMember = async (req, res) => {
    try {
        console.log('Request body:', req.body); // Log request body to check if it's being received
        
        // Extract member data from the request body
        const { name, contact, email, username, password } = req.body;

        // Check if the username or email already exists
        const existingMember = await Member.findOne({ $or: [{ username }, { email }] });
        if (existingMember) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Create a new member instance
        const newMember = new Member({
            name,
            contact,
            email,
            username,
            password: hashedPassword
        });

        console.log('New Member Data:', newMember); // Log new member data

        // Save the new member to the database
        await newMember.save();

        res.status(201).json({ message: 'Member registered successfully', data: newMember });
    } catch (error) {
        console.error('Error registering member:', error);
        res.status(500).json({ message: 'Error registering member', error: error.message });
    }
}; 

// Controller function to handle member login
export const loginMember = async (req, res) => {
    try {
        // Extract username and password from the request body
        const { loginusername, loginpassword } = req.body;

        // Find the member by username
        const member = await Member.findOne({ username: loginusername });
        if (!member) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the hashed password stored in the database
        const isPasswordValid = await comparePassword(loginpassword, member.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Login successful, include the redirect URL in the response
        res.status(200).json({ message: 'Login successful', data: member, redirectUrl: '/client/memberdashboard' });
    
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Error during login', error: error.message });
    }
};
