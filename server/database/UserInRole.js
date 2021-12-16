const { Schema, model } = require('mongoose');

const { databaseConstants: { USERINROLE, USERROLES, USER } } = require('../constants');

const userinroleShema = new Schema({
    _id: {
      type: Schema.Types.ObjectID,
      default: new Schema.Types.ObjectId()
    },
    user_id: {
        type: Schema.Types.ObjectID,
        ref: USER,
        required: true
    },
    role_id: {
        type: Schema.Types.ObjectID,
        ref: USERROLES,
        required: true
    }
  });

  userinroleShema.pre('find', function() {
    this.populate('user_id',);
  });

  userinroleShema.pre('find', function() {
    this.populate('role_id');
  });
  
  module.exports = model(USERINROLE, userinroleShema);