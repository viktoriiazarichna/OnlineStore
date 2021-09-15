const router = require('express').Router();

const fruitsController = require('../contollers/fruits.controller');

router.get('/', fruitsController.getAllFruits);

module.exports = router;