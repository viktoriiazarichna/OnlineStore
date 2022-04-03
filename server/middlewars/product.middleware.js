const { tokenService } = require('../services');
const { ErrorHandler, errorMessages }  = require('../errors');
const { UserModel } = require('../database');
const { responseCodes } = require('../constants');

module.exports = {
  authenticate: async (req, res, next) => {
    try {
      const token = req.get('Authorization');

      if (!token) {
        throw new ErrorHandler(
          responseCodes.AUTHENTICATION_ERROR,
          errorMessages.NO_TOKEN.message,
          errorMessages.NO_TOKEN.code
        )
      }

      await tokenService.verifyToken(token);

      const tokenObj = await UserModel.findOne({ accessToken: token });

      if (!tokenObj) {
        throw new ErrorHandler(
          responseCodes.AUTHENTICATION_ERROR,
          errorMessages.WRONG_TOKEN.message,
          errorMessages.WRONG_TOKEN.code
        )
      }

      req.user = tokenObj;
      next();
    } catch (e) {
      next(e);
    }
  }
};
