const { OrderModel } = require('../database');
const { responseCodes } = require('../constants');

module.exports = {
  
  addOneOrder: async (req, res, next) => {

    try {

      const { name, phone, address, delivery, payment, comment, totalPrice, products } = req.body.body;
      const addedOrder = await OrderModel.create({
        name: name,
        phone: phone,
        address: address,
        delivery: delivery,
        payment: payment,
        comment: comment,
        products: products,
        totalPrice: totalPrice
      });

      res.status(responseCodes.CREATED).json(addedOrder);
    } catch (e) {
      next(e);
    }
  }  
};
