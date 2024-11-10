const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: String,
  tags: [String],
  creationDate: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  commentsCount: { type: Number, default: 0 },
});

module.exports = mongoose.model('Post', postSchema);