const { passwordHesher } = require('../services');

module.exports = {
  loginUser: async (req, res, next) => {
    try {
      const { password: hashedPassword } = req.user;
      const { password } = req.body.logUserData;

      await passwordHesher.compare(hashedPassword, password);

      res.json('Ви увійшли в особистий кабінет')
    } catch (e) {
      next(e);
    }
  }
};
