// routes/leaderboardRoutes.js
const express = require('express');
const { getLeaderboard, updateLeaderboard } = require('../controllers/leaderboardController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Ensure the user is authenticated

// Route to get the leaderboard
router.get('/leaderboard', getLeaderboard);

// Route to update the leaderboard (based on points or any other metric)
router.put('/leaderboard', authMiddleware, updateLeaderboard);

module.exports = router;
