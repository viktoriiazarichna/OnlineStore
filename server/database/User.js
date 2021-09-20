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
  accessToken: {
    type: String,
    required: true
  },
  refreshToken: {
    type: String,
    required: true
  }
});

module.exports = model(USER, userShema);