const router = require('express').Router();

const categoriesController = require('../contollers/categories.controller');

router.get('/', categoriesController.getAllCategories);

module.exports = router;