const router = require('express').Router();

const { orderController } = require('../contollers');

router.post('/', orderController.addOneOrder);


module.exports = router;