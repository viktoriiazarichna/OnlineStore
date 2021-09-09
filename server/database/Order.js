const { Schema, model } = require('mongoose');

const { databaseConstants: { ORDER, PRODUCT, USER } } = require('../constants');

const orderSchema = new Schema({
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
  },
  dateOfOrder: {
    type: Date
  }
});

orderSchema.pre('findOne', function() {
  this.populate('user');
});
orderSchema.pre('find', function() {
  this.populate('products');
});

module.exports = model(ORDER, orderSchema);