const router = require('express').Router();

const { categoriesController } = require('../contollers');

router.get('/', categoriesController.getAllCategories);

module.exports = router;