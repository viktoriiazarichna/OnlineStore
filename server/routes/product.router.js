const router = require('express').Router();

const { productController } = require('../contollers');
const { productMiddleware } = require('../middlewars');
const { fileMiddleware } = require('../middlewars');

router.post('/:categoryName', productController.getAllProducts);
router.get('/:categoryName/:productName', productController.getOneProduct);
router.post('/', productMiddleware.authenticate, productController.addOneProduct);
router.post('/uploadFile',
    fileMiddleware.checkFiles,
    productController.uploadFile);

module.exports = router;