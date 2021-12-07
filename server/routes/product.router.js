const router = require('express').Router();

const { productController } = require('../contollers');

router.get('/:categoryName', productController.getAllProducts);
router.get('/:categoryName/:productName', productController.getOneProduct);
router.post('/addOneProduct', productController.addOneProduct)

module.exports = router;