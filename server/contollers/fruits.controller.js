const { ProductModel} = require('../database');

module.exports = {
    getAllFruits: async (req, res) => {
        const fruits = await ProductModel.find({'category.$id':'612fa4f44c679f2aa8bb0f37'});
        res.json(fruits);
    }
};