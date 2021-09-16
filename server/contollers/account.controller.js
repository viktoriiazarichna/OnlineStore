const { responseCodes } = require('../constants');
const { UserModel } = require('../database');
const { passwordHesher } = require('../services');

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const { username, email, phone, address, password } = req.body.body;

      const hashedPassword = await passwordHesher.hash(password);

      const user = await UserModel.create({
        username,
        email,
        phone,
        address,
        password: hashedPassword,
        isLogin: true
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

      await UserModel.updateOne({_id: req.user._id}, {isLogin: true});

      res.status(responseCodes.OK).json(req.user);
    } catch (e) {
      next(e);
    }
  },

  logoutUser: async (req, res, next) => {
    try {
      const {id} = req.body.body;

      await UserModel.updateOne({id}, {isLogin: false});
      const user = await UserModel.findOne({id});

      res.json(user);
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
