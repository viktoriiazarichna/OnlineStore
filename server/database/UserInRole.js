const { Schema, model } = require('mongoose');

const { databaseConstants: { USERINROLE } } = require('../constants');

const userinroleShema = new Schema({
    _id: {
      type: Schema.Types.ObjectID,
      default: new Schema.Types.ObjectId()
    },
    user_id: [{
        $ref: String,
        $id: {
            type: Schema.Types.ObjectID,
            ref: 'users'
        }
    }],
    role_id: [{
        $ref: String,
        $id: {
            type: Schema.Types.ObjectID,
            ref: 'userroles'
        }
    }]
  });
  
  module.exports = model(USERINROLE, userinroleShema);