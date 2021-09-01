const { UserModel } = require('../database');
const { registrationValidator } = require('../validators');

module.exports = {
  checkIsEmailBusy: async (req, res, next) => {
    try {
      const { email } = req.body.regUserData

      const user = await UserModel.findOne({ email });

      if (user) {
        throw new Error('this email are busy');
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
        throw new Error (error);
      }

      next();
    } catch (e) {
      next(e);
    }
  }
};
