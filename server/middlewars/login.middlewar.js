const { UserModel } = require('../database');

module.exports = {
  getUser: async (req, res, next) => {
    try {
      const { email } = req.body.logUserData;

      const user = await UserModel.findOne({ email }).select('+password');

      if (!user) {
        throw new Error('email is not found');
      }

      req.user = user;

      next();
    } catch (e) {
      next(e);
    }
  }
};
