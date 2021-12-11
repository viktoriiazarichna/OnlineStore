const router = require('express').Router();

const { productController } = require('../contollers');
const { fileMiddleware } = require('../middlewars');

router.get('/:categoryName', productController.getAllProducts);
router.get('/:categoryName/:productName', productController.getOneProduct);
router.post('/product', 
fileMiddleware.checkFiles,
productController.addOneProduct);

module.exports = router;