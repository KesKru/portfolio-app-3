const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const md = require('../models/index');

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.methods.hashPassword = function() {
  return bcrypt.hash(this.password, 10);
};

UserSchema.methods.comparePassword = function(passwordToCheck) {
  return bcrypt.compare(passwordToCheck, this.password);
};

module.exports = User = mongoose.model('User', UserSchema);
