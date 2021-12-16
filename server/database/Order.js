const { Schema, model } = require('mongoose');

const { databaseConstants: { ORDER, PRODUCT, USER } } = require('../constants');

const orderSchema = new Schema({
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: USER,
  //   required: true
  // },

  name: {
    type: String    
  },

  phone: {
    type: Number
  },

  address: {
    type: String,
    required: true
  },

  delivery: {
    type: String,
    required: true
  },

  payment: {
    type: String,
    required: true
  },

  comment: {
    type: String,
    required: true
  },  

  // products: [{
  //   type: Schema.Types.ObjectId,
  //   ref: PRODUCT
  // }],

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