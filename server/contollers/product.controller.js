const { ProductModel} = require('../database');

module.exports = {
  getAllFruits: async (req, res) => {
    const {categoryName} = req.params;

    const productsList = await ProductModel.find().where({'categoryName': categoryName});

    console.log(productsList);
    res.json(productsList);
  }
};