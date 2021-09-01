const { UserModel } = require('../database');
const { passwordHesher } = require('../services');

module.exports = {
  loginUser: async (req, res, next) => {
    try {
      const { email, password } = req.body.logUserData;

      const user = await UserModel.findOne({ email }).select('+password');;

      await passwordHesher.compare(user.password, password);

      res.json('Ви увійшли в особистий кабінет')
    } catch (e) {
      next(e);
    }
  }
};
