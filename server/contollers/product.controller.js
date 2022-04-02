const { ProductModel } = require('../database');
const { responseCodes } = require('../constants');

module.exports = {
  getAllProducts: async (req, res) => {
    const {categoryName, pageNumber} = req.body.params;
    const productsList = await ProductModel.find().where({'categoryName': categoryName}).limit(3)
    .skip(pageNumber*3)
    .sort({
      nameEnglish: 'asc'
    });
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

      const { name, price, country, measuringUnit, measurement, nameEnglish, image, category, categoryName } = req.body.body;
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
  },

  uploadFile: async (req, res, next) => {

    try {
      const newpath =  "F:\\OnlineStore\\server\\static\\images\\products\\";
      let fileName = req.files.image.name;
      req.files.image.mv(`${newpath}${fileName}`, (err) => {
        if (err) {
          res.status(500).send({ message: "File upload failed", code: 200 });
        }
        res.status(200).send({ message: "File Uploaded", code: 200 });
      });
    } catch (e) {
      next(e);
    }
  }
};