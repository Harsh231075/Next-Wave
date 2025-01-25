// routes/rewardsRoutes.js
const express = require('express');
const { getRewards, claimReward } = require('../controllers/rewardsController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Ensure the user is authenticated

// Route to get all rewards
router.get('/rewards', getRewards);

// Route to claim a reward
router.post('/rewards/claim', authMiddleware, claimReward);

module.exports = router;
