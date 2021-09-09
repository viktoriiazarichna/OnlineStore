const { Schema, model } = require('mongoose');

const { databaseConstants: { CARD, PRODUCT, USER } } = require('../constants');

const cardSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: USER,
    required: true
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: PRODUCT
  }],
  totalPrice: {
    type: Number
  }
});

cardSchema.pre('findOne', function() {
  this.populate('user');
});
cardSchema.pre('find', function() {
  this.populate('products');
});

module.exports = model(CARD, cardSchema);