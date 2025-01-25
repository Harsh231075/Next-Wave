// routes/challengesRoutes.js
const express = require('express');
const { getChallenges, joinChallenge, updateChallengeStatus } = require('../controllers/challengesController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Ensure the user is authenticated

// Route to get all challenges
router.get('/challenges', getChallenges);

// Route to join a challenge
router.post('/challenges/join', authMiddleware, joinChallenge);

// Route to update challenge status
router.put('/challenges/status', authMiddleware, updateChallengeStatus);

module.exports = router;
