const { Schema, model } = require('mongoose');

const { databaseConstants: { ORDER, PRODUCT, USER } } = require('../constants');

const orderSchema = new Schema({

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

  products: [{
      product: {
        type: Schema.Types.ObjectId,
        ref: PRODUCT
      },
      quantity: {
        type: Number,
      }
    }
  ],

  totalPrice: {
    type: Number
  },

  dateOfOrder: {
    type: Date,
    default: Date.now
  }
});

orderSchema.pre('find', function() {
  this.populate('user');
});
orderSchema.pre('find', function() {
  this.populate('product');
});

module.exports = model(ORDER, orderSchema);