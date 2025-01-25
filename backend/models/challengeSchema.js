const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  points: { type: Number, required: true }, // Points awarded for completing the challenge
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Users who joined the challenge
  createdAt: { type: Date, default: Date.now }
});

const Challenge = mongoose.model('Challenge', challengeSchema);
module.exports = Challenge;
