const { ProductModel } = require('../database');
const { responseCodes } = require('../constants');

module.exports = {
  getAllProducts: async (req, res) => {
    const {categoryName} = req.params;
    const productsList = await ProductModel.find().where({'categoryName': categoryName});
    res.json(productsList);
  },

  getOneProduct: async (req, res, next) => {
    try {
      const {productName} = req.params;
      const product = await ProductModel.findOne({'nameEnglish': productName});
      res.json(product);
    } catch (e) {
      next(e);
    }
  },

  addOneProduct: async (req, res, next) => {

    try {

      const { name, price, country, measuringUnit, measurement, nameEnglish, image, categoryName } = req.body;
     
      const addedProduct = await ProductModel.create({
        name,
        price,
        country,
        measuringUnit,
        measurement,
        nameEnglish,
        image,
        categoryName
      });

      res.status(responseCodes.CREATED).json(addedProduct);
    } catch (e) {
      next(e);
    }
  }
};