const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  },
  date: {
    type: Date,
    default: Date.now
  },
  token: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    default: 'admin'
  },
}, {
  collection: 'users'
})


module.exports = mongoose.model('User', userSchema);
