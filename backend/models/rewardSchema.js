const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  pointsRequired: { type: Number, required: true }, // Points needed to redeem the reward
  image: { type: String }, // Image for the reward
  createdAt: { type: Date, default: Date.now }
});

const Reward = mongoose.model('Reward', rewardSchema);
module.exports = Reward;
