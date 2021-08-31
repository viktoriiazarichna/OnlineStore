const router = require('express').Router();

const { registrationController: { createUser } } = require('../contollers');

router.post('/', createUser);

module.exports = router;