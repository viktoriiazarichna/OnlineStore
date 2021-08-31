const { Schema, model } = require('mongoose');

const { databaseConstants: { USER } } = require('../constants');

const userShema = new Schema({
  username: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  password: {
    type: String,
    select: false
  }
});

module.exports = model(USER, userShema);