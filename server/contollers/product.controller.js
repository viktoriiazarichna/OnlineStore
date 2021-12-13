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

      const { name, price, country, measuringUnit, measurement, nameEnglish, image, category, categoryName } = req.body;

      const { ObjectId } = require('mongodb');
      const categoryid = ObjectId(category);
      const addedProduct = await ProductModel.create({
        name: name,
        price: price,
        country: country,
        measuringUnit: measuringUnit,
        measurement: measurement,
        nameEnglish: nameEnglish,
        category: categoryid,
        categoryName: categoryName,
        image: image
      });

      res.status(responseCodes.CREATED).json(addedProduct);
    } catch (e) {
      next(e);
    }
  }
};