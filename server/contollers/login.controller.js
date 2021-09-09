const { responseCodes } = require('../constants');
const { passwordHesher } = require('../services');

module.exports = {
  loginUser: async (req, res, next) => {
    try {
      const { password: hashedPassword } = req.user;
      const { password } = req.body.logUserData;

      await passwordHesher.compare(hashedPassword, password);

      res.status(responseCodes.OK).json(req.user);
    } catch (e) {
      next(e);
    }
  }
};
