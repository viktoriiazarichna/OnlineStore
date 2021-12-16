const { Schema, model } = require('mongoose');

const { databaseConstants: { USERROLES } } = require('../constants');

const userrolesShema = new Schema({
    _id: {
      type: Schema.Types.ObjectID,
      default: new Schema.Types.ObjectId()
    },
    role_name: {
      type: String,
      default: 'User'
    },
    parent_role: {
      type: Schema.Types.ObjectID,
      ref: USERROLES
    }
  });

  userrolesShema.pre('findOne', function() {
    this.populate('parent_role');
  });
  
  module.exports = model(USERROLES, userrolesShema);