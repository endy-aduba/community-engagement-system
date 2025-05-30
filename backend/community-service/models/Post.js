const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, enum: ['news', 'discussion'], required: true },
  aiSummary: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

module.exports = mongoose.model('Post', postSchema);
