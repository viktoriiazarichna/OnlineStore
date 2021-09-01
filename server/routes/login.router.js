const router = require('express').Router();

const { loginController } = require('../contollers');

router.post('/', loginController.loginUser);

module.exports = router;