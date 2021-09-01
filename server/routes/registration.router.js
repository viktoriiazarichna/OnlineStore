const router = require('express').Router();

const { registrationController } = require('../contollers');

router.post('/', registrationController.createUser);

module.exports = router;