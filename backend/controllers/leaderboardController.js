// controllers/leaderboardController.js
const Leaderboard = require('../models/leaderboardSchema');

// Get Leaderboard
const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find().sort({ points: -1 }).limit(10); // Top 10 players
    res.status(200).json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Leaderboard (if points or rank change)
const updateLeaderboard = async (req, res) => {
  const { userId, points } = req.body;

  try {
    let user = await Leaderboard.findOne({ userId });

    if (!user) {
      // If the user is not on the leaderboard, create a new entry
      user = new Leaderboard({ userId, points });
    } else {
      // Update the user's points
      user.points = points;
    }

    await user.save();
    res.status(200).json({ message: 'Leaderboard updated successfully', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getLeaderboard, updateLeaderboard };
