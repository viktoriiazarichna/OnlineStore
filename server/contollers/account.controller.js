const { responseCodes } = require('../constants');
const { UserModel } = require('../database');
const { passwordHesher, tokenService } = require('../services');

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const { username, email, phone, address, password } = req.body.body;

      const hashedPassword = await passwordHesher.hash(password);
      const tokenPair = tokenService.generateTokenPair();

      const user = await UserModel.create({
        username,
        email,
        phone,
        address,
        password: hashedPassword,
        ...tokenPair
      });

      res.status(responseCodes.CREATED).json(user);
    } catch (e) {
      next(e);
    }
  },
  
  loginUser: async (req, res, next) => {
    try {
      const { password: hashedPassword } = req.user;
      const { password } = req.body.body;

      await passwordHesher.compare(hashedPassword, password);

      const tokenPair = tokenService.generateTokenPair();

      const user = await UserModel.findOneAndUpdate({_id: req.user._id}, { ...tokenPair }, { new: true });

      res.status(responseCodes.OK).json(user);
    } catch (e) {
      next(e);
    }
  },

  logoutUser: async (req, res, next) => {
    try {
      const token = req.get('Authorization');

      await UserModel.updateOne({ accessToken: token }, { accessToken: '' });

      res.json('Ok');
    } catch (e) {
      next(e);
    }
  },

  getOneUser: async (req, res, next) => {
    try {
      const {id} = req.params;

      const user = await UserModel.findOne({id});

      res.json(user);
    } catch (e) {
      next(e);
    }
  }
};
