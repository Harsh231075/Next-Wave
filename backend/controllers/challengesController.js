// controllers/challengesController.js
const Challenge = require('../models/challengeSchema');

// Get all Challenges
const getChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.status(200).json(challenges);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Join a Challenge (users can join a challenge)
const joinChallenge = async (req, res) => {
  const { challengeId, userId } = req.body;

  try {
    const challenge = await Challenge.findById(challengeId);

    if (!challenge) return res.status(404).json({ message: "Challenge not found" });

    if (challenge.participants.includes(userId)) {
      return res.status(400).json({ message: "User already joined the challenge" });
    }

    challenge.participants.push(userId);
    await challenge.save();

    res.status(200).json({ message: "Challenge joined successfully", challenge });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Challenge (to mark as completed, etc.)
const updateChallengeStatus = async (req, res) => {
  const { challengeId, userId, status } = req.body;

  try {
    const challenge = await Challenge.findById(challengeId);
    if (!challenge) return res.status(404).json({ message: "Challenge not found" });

    const userIndex = challenge.participants.indexOf(userId);
    if (userIndex === -1) {
      return res.status(400).json({ message: "User not part of this challenge" });
    }

    challenge.participantStatus[userIndex] = status;
    await challenge.save();

    res.status(200).json({ message: "Challenge status updated successfully", challenge });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getChallenges, joinChallenge, updateChallengeStatus };
