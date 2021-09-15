const { Schema, model } = require('mongoose');

const { databaseConstants: { CATEGORY, PRODUCT } } = require('../constants');

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  country: {
    type: String
  },
  measuringUnit: {
    type: String,
    required: true
  },
  measurement: {
    type: Number
  },
  nameEnglish: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: CATEGORY,
    id: Number,
    required: true
  },
  categoryName: {
    type: String
  },
  image: {
    type: String
  }
});

productSchema.pre('findOne', function() {
  this.populate('category');
});

module.exports = model(PRODUCT, productSchema);