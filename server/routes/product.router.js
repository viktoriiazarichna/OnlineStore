const router = require('express').Router();

const { productController } = require('../contollers');

router.get('/:categoryName', productController.getAllFruits);

module.exports = router;