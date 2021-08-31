const { UserModel } = require('../database');

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const { username, email, phone, address, password } = req.body.regUserData;

      await UserModel.create({ username, email, phone, address, password });

      res.json('Ви успішно зареєструвались. Будь ласка, підтвердіть Ваш емайл');
    } catch (e) {
      next(e);
    }
  }
};
