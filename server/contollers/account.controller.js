const { databaseConstants: {ADMIN}, responseCodes } = require('../constants');
const { AuthModel, UserModel } = require('../database');
const { passwordHesher, tokenService } = require('../services');

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const { username, email, phone, address, password } = req.body.body;

      const hashedPassword = await passwordHesher.hash(password);
      const tokenPair = tokenService.generateTokenPair();

      const countUsers = await UserModel.estimatedDocumentCount();
      let role;
      if (countUsers === 0) {
        role = ADMIN;
      }

      const user = await UserModel.create({
        username,
        email,
        phone,
        address,
        password: hashedPassword,
        role
      });
      await AuthModel.create({
        ...tokenPair,
        userId: user._id
      });

      res.status(responseCodes.CREATED).json({
        user,
        ...tokenPair
      });
    } catch (e) {
      next(e);
    }
  },
  
  loginUser: async (req, res, next) => {
    try {
      const { password: hashedPassword, id } = req.user;
      const { password } = req.body.body;

      await passwordHesher.compare(hashedPassword, password);

      const tokenPair = tokenService.generateTokenPair();

      await AuthModel.create({
        ...tokenPair,
        userId: id
      });

      res.status(responseCodes.OK).json({
        user: req.user,
        ...tokenPair
      });
    } catch (e) {
      next(e);
    }
  },

  logoutUser: async (req, res, next) => {
    try {
      const token = req.get('Authorization');

      await AuthModel.deleteOne({ accessToken: token });

      res.json('Ok');
    } catch (e) {
      next(e);
    }
  },

  getOneUser: async (req, res, next) => {
    try {
      const {id} = req.params;

      const user = await UserModel.findOne({_id: id});

      res.json(user);
    } catch (e) {
      next(e);
    }
  }
};
