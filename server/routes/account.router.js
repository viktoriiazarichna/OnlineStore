const router = require('express').Router();

const { accountController } = require('../contollers');
const { accountMiddlewar } = require('../middlewars');

router.post('/registration',
  accountMiddlewar.checkIsEmailBusy,
  accountMiddlewar.checkIsRegUserDataValidity,
  accountController.createUser
);

router.post('/login',
  accountMiddlewar.getUser,
  accountController.loginUser
);

module.exports = router;