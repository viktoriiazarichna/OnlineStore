const Joi = require('joi');

const { regexp } = require('../constants');

module.exports = {
  createUser: Joi.object().keys({
    username: Joi.string().required(),
    email: Joi.string().regex(regexp.EMAIL_REGEXP).required(),
    phone: Joi.number().required(),
    address: Joi.string().required(),
    password: Joi.string().required()
  })
};
