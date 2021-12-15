const router = require('express').Router();

const { productController } = require('../contollers');
const { fileMiddleware } = require('../middlewars');

const multer  = require('multer');
const upload = multer({ dest: './static/images/products/' });

router.get('/:categoryName', productController.getAllProducts);
router.get('/:categoryName/:productName', productController.getOneProduct);
router.post('/addOneProduct', productController.addOneProduct);
router.post('/uploadFile',
    fileMiddleware.checkFiles,
    productController.uploadFile);

module.exports = router;