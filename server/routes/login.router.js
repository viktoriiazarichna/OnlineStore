const router = require('express').Router();

const { loginController } = require('../contollers');
const { loginMiddlewar } = require('../middlewars');

router.post('/',
  loginMiddlewar.getUser,
  loginController.loginUser
);

module.exports = router;