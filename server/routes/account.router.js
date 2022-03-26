const router = require('express').Router();

const { accountController } = require('../contollers');
const { accountMiddleware } = require('../middlewars');

router.post('/registration',
  accountMiddleware.checkIsEmailBusy,
  accountMiddleware.checkIsRegUserDataValidity,
  accountController.createUser
);

router.post('/login',
  accountMiddleware.getUser,
  accountController.loginUser
);

router.put('/logout',
  accountMiddleware.checkAccessToken,
  accountController.logoutUser
);

router.get('/:id', accountController.getOneUser);

module.exports = router;