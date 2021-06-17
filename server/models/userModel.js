const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  date: {
    type: Date,
    default: Date.now
  },
  menus: [{
    type: String,
    default: '',
  }],
  role: {
    type: String,
    default: 'admin'
  },
  menuItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'collectionMenuItem'
  }]
});

const User = mongoose.model('collectionUser', userSchema);

module.exports = User;
