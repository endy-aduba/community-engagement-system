const mongoose = require('mongoose');

const helpRequestSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String, required: true },
  location: String,
  isResolved: { type: Boolean, default: false },
  volunteers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

module.exports = mongoose.model('HelpRequest', helpRequestSchema);
