const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  wallet: {
    type: String,
    default: null
  },
  balance: {
    type: Number,
    default: 10
  }
});

module.exports = mongoose.model('User', userSchema);
