const { Schema, model } = require('mongoose');

const { databaseConstants: { USER } } = require('../constants');

const userShema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    required: true,
    type: String
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  role: {
    type: String,
    default: USER
  }
});

module.exports = model(USER, userShema);