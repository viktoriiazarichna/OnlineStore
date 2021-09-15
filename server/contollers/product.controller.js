const { ProductModel} = require('../database');

module.exports = {
  getAllFruits: async (req, res) => {
    const {categoryName} = req.params;

    const productsList = await ProductModel.find().populate('category').exec((err, products) => {
      if (err) throw err;
      
      products = products.filter(product => product.categoryName === categoryName);

      res.send(products);
    });

    console.log(productsList);
    res.json(productsList);
  }
};