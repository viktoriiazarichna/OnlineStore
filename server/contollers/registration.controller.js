const { UserModel } = require('../database');
const { passwordHesher } = require('../services');

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const { username, email, phone, address, password } = req.body.regUserData;

      const hashedPassword = await passwordHesher.hash(password);

      await UserModel.create({
        username,
        email,
        phone,
        address,
        password: hashedPassword
      });

      res.json('Ви успішно зареєструвались.');
    } catch (e) {
      next(e);
    }
  }
};
