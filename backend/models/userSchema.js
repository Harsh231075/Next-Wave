const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePic: { type: String, default: "default.jpg" }, // Profile picture URL
  rank: { type: Number, default: 0 }, // Ranking on leaderboards
  rewards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reward' }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  challengesJoined: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Challenge' }],
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
