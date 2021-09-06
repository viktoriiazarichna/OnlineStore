const { CategoryModel } = require('../database');

module.exports = {
  getAllCategories: async (req, res) => {
    const categories = await CategoryModel.find();

    res.json(categories);
  }
};