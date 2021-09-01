const { responseCodes } = require('../constants');
const { UserModel } = require('../database');
const { ErrorHandler, errorMessages }  = require('../errors');
const { registrationValidator } = require('../validators');

module.exports = {
  checkIsEmailBusy: async (req, res, next) => {
    try {
      const { email } = req.body.regUserData

      const user = await UserModel.findOne({ email });

      if (user) {
        throw new ErrorHandler(
          responseCodes.AUTHENTICATION_ERROR,
          errorMessages.EMAIL_BUSY.message,
          errorMessages.EMAIL_BUSY.code
        );
      }

      next();
    } catch (e) {
      next(e);
    }
  },
  
  checkIsRegUserDataValidity: (req, res, next) => {
    try {
      const { error } = registrationValidator.createUser.validate(req.body.regUserData);

      if (error) {
        throw new Error (
          responseCodes.AUTHENTICATION_ERROR,
          errorMessages.FIELD_NOT_FILLED.message(error.details[0].message),
          errorMessages.FIELD_NOT_FILLED.code
        );
      }

      next();
    } catch (e) {
      next(e);
    }
  }
};
