// routes/profileRoutes.js
const express = require('express');
const { updateProfile, register, login, getProfile } = require('../controllers/profileController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Ensure the user is authenticated

// Route to update the profile (username, email, profilePic)
router.put('/profile', authMiddleware, updateProfile);
router.post('/register', register);
router.post('/login', login);
router.get('/my-profile', authMiddleware, getProfile);

module.exports = router;
