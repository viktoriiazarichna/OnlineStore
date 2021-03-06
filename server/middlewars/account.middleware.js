const { Mongoose } = require('mongoose');
const { responseCodes } = require('../constants');
const { UserModel, UserInRoleModel, UserRolesModel } = require('../database');
const { ErrorHandler, errorMessages }  = require('../errors');
const { tokenService } = require('../services');
const { registrationValidator } = require('../validators');

module.exports = {
  checkIsEmailBusy: async (req, res, next) => {
    try {
      const { email } = req.body.body

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
      const { error } = registrationValidator.createUser.validate(req.body.body);

      if (error) {
        throw new ErrorHandler (
          responseCodes.AUTHENTICATION_ERROR,
          errorMessages.FIELD_NOT_FILLED.message(error.details[0].message),
          errorMessages.FIELD_NOT_FILLED.code
        );
      }

      next();
    } catch (e) {
      next(e);
    }
  },
  
  getUser: async (req, res, next) => {
    try {
      const { email } = req.body.body;
      
      const user = await UserModel.findOne({ email }).select('+password');
      const userInRoles = await UserInRoleModel.find({ 'user_id':  user._id });
      let userRoles = '';
      const rolesId = [];
      
      for (const userInRole of userInRoles){
        rolesId.push(userInRole.role_id._id);
      } 
      
      const userRole = await UserRolesModel.find({ _id: {$in: rolesId } });
      for (const role of userRole){
        userRoles += role._doc.role_name+";";
      }

      if (!user) {
        throw new ErrorHandler(
          responseCodes.NOT_FOUND,
          errorMessages.WRONG_EMAIL_OR_PASS.message,
          errorMessages.WRONG_EMAIL_OR_PASS.code
        );
      }

      req.user = user;
      req.roles = userRoles;

      next();
    } catch (e) {
      next(e);
    }
  },

  checkAccessToken: async (req, res, next) => {
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
  },

  checkRefreshToken: async (req, res, next) => {
    try {
      const token = req.get('Authorization');

      if (!token) {
        throw new ErrorHandler(
          responseCodes.AUTHENTICATION_ERROR,
          errorMessages.NO_TOKEN.message,
          errorMessages.NO_TOKEN.code
        )
      }

      await tokenService.verifyToken(token, 'refresh');

      const tokenObj = await UserModel.findOne({ refreshToken: token });

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
