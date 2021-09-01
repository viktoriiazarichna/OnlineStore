const { responseCodes } = require('../constants');
const { UserModel } = require('../database');
const { ErrorHandler, errorMessages }  = require('../errors');

module.exports = {
  getUser: async (req, res, next) => {
    try {
      const { email } = req.body.logUserData;

      const user = await UserModel.findOne({ email }).select('+password');

      if (!user) {
        throw new ErrorHandler(
          responseCodes.NOT_FOUND,
          errorMessages.WRONG_EMAIL_OR_PASS.message,
          errorMessages.WRONG_EMAIL_OR_PASS.code
        );
      }

      req.user = user;

      next();
    } catch (e) {
      next(e);
    }
  }
};
