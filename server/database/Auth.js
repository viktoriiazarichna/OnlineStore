const { Schema, model } = require('mongoose');

const { databaseConstants: { AUTH, USER } } = require('../constants');

const authSchema = new Schema({
  accessToken: {
    type: String,
    required: true
  },
  refreshToken: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: USER,
    id: Number,
    required: true,
  }
});

authSchema.pre('findOne', function() {
  this.populate('user');
});

module.exports = model(AUTH, authSchema);