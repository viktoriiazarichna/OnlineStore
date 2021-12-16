const router = require('express').Router();

const { orderController } = require('../contollers');

router.post('/addOneOrder', orderController.addOneOrder);


module.exports = router;