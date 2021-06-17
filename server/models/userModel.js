const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  date: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    default: 'admin'
  },
  menus: [{
    type: mongoose.Schema.Types.ObjectId,
    default: 'collectionMenu'
  }],
});

const User = mongoose.model('collectionUser', userSchema);

module.exports = User;
