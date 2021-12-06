const { ProductModel } = require('../database');
const { responseCodesEnum } = require('../constants');

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
      const addedProduct = await ProductModel.create(req.body);
      res.status(responseCodesEnum.CREATED).json(addedProduct);
    } catch (e) {
      next(e);
    }
  }
};