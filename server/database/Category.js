const { Schema, model } = require('mongoose');

const { databaseConstants: { CATEGORY } } = require('../constants');

const categorySchema = new Schema({
  name: {
    type: String
  }
});

module.exports = model(CATEGORY, categorySchema);