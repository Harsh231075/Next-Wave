// controllers/profileController.js
const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');  // For password hashing if needed
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({ username, email, password: hashedPassword });

    await user.save();

    res.status(200).json({ message: 'register sucessfuly', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update User Profile
const updateProfile = async (req, res) => {
  const { username, email, profilePic } = req.body; // User can send new profile data
  console.log(username)
  try {
    // Find the user by ID and update their profile
    const user = await User.findById(req.user);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if the user wants to update their password
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    // Update profile
    user.username = username || user.username;
    user.email = email || user.email;
    user.profilePic = profilePic || user.profilePic;

    await user.save();

    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProfile = async (req, res) => {
  try {
    // Get user ID from the token
    const userId = req.user; // `req.user` is populated by the auth middleware
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Respond with user details (excluding sensitive data like password)
    res.status(200).json({
      name: user.username,
      email: user.email,
      photo: user.profilePic || 'https://via.placeholder.com/150', // Default placeholder if no photo
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = { updateProfile, register, login, getProfile };
