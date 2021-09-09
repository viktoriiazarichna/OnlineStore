const { Schema, model } = require('mongoose');

const { databaseConstants: { CATEGORY } } = require('../constants');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  nameEnglish: {
    type: String,
    required: true
  }
});

module.exports = model(CATEGORY, categorySchema);