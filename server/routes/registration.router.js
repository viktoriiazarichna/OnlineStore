const router = require('express').Router();

const { registrationController } = require('../contollers');
const { registrationMiddlewar } = require('../middlewars');

router.post('/',
  registrationMiddlewar.checkIsEmailBusy,
  registrationMiddlewar.checkIsRegUserDataValidity,
  registrationController.createUser
);

module.exports = router;