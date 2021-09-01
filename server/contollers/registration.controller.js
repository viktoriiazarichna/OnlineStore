const { responseCodes } = require('../constants');
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

      res.status(responseCodes.CREATED).json('OK');
    } catch (e) {
      next(e);
    }
  }
};
