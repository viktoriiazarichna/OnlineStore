const { responseCodes } = require('../constants');
const { UserModel } = require('../database');
const { passwordHesher } = require('../services');

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const { username, email, phone, address, password } = req.body.regUserData;

      const hashedPassword = await passwordHesher.hash(password);

      const user = await UserModel.create({
        username,
        email,
        phone,
        address,
        password: hashedPassword,
        isActive: true
      });

      res.status(responseCodes.CREATED).json(user);
    } catch (e) {
      next(e);
    }
  },
  
  loginUser: async (req, res, next) => {
    try {
      const { password: hashedPassword } = req.user;
      const { password } = req.body.logUserData;

      await passwordHesher.compare(hashedPassword, password);

      await UserModel.updateOne({_id: req.user._id}, {isActive: true});

      res.status(responseCodes.OK).json(req.user);
    } catch (e) {
      next(e);
    }
  }
};
