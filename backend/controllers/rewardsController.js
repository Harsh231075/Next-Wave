// controllers/rewardsController.js
const Reward = require('../models/rewardSchema');

// Get all Rewards
const getRewards = async (req, res) => {
  try {
    const rewards = await Reward.find();
    res.status(200).json(rewards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Claim Reward (User claiming a reward)
const claimReward = async (req, res) => {
  const { userId, rewardId } = req.body;

  try {
    const reward = await Reward.findById(rewardId);
    if (!reward) return res.status(404).json({ message: "Reward not found" });

    // Assuming there's a user collection that tracks claimed rewards
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.claimedRewards.includes(rewardId)) {
      return res.status(400).json({ message: "Reward already claimed" });
    }

    user.claimedRewards.push(rewardId);
    await user.save();

    res.status(200).json({ message: "Reward claimed successfully", reward });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getRewards, claimReward };
