const router = require('express').Router();

const { productController } = require('../contollers');
const { fileMiddleware } = require('../middlewars');

router.get('/:categoryName', productController.getAllProducts);
router.get('/:categoryName/:productName', productController.getOneProduct);
<<<<<<< HEAD
router.post('/product', 
fileMiddleware.checkFiles,
productController.addOneProduct);
=======
router.post('/addOneProduct', productController.addOneProduct)
>>>>>>> 569e3c8488d60c1929fbffdc993cbac6f35c7e1e

module.exports = router;