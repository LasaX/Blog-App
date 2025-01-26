import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';
import generateToken from '../middleware/genarateToken.js';
import dotenv from 'dotenv'

dotenv.config();

// Register endpoint
router.post('/register', async (req, res) => {
    try {
        
        const { email, password, userName } = req.body;
        
       console.log(req.body)
        const user = new User({ email, password, userName });
        await user.save();
        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send({ message: 'Registration failed' });
    }
});

// Login endpoint
router.post('/login', async (req, res) => {
    try {
        console.log(req.body)
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });
        //console.log(user._id)
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).send({ message: 'Invalid credentials' });
        }

        
        const token = await generateToken(user._id); // Generate token with user ID
        
        res.cookie('token', token, { httpOnly: true,
            secure: true, // Ensure this is true for HTTPS
            sameSite: 'None'});
            
        res.status(200).send({ message: 'Logged in successfully', token, user: {
            _id: user._id,
            email: user.email,
            username: user.username,
            role: user.role
        } });
        
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send({ message: 'Login failed' });
    }
});

// Logout endpoint (optional)
router.post('/logout', (req, res) => {
    res.clearCookie('token'); 
    res.status(200).send({ message: 'Logged out successfully' });
});


// all users 

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({}, 'id email role');
        res.status(200).send(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send({ message: 'Failed to fetch users' });
    }
});

// delete a user
router.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send({ message: 'Failed to delete user' });
    }
})

// update a user role
router.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { role } = req.body;
        const user = await User.findByIdAndUpdate(id, { role }, { new: true });
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send({ message: 'User role updated successfully', user });
    } catch (error) {
        console.error('Error updating user role:', error);
        res.status(500).send({ message: 'Failed to update user role' });
    }
});


export default router;