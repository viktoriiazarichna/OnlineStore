require('dotenv').config();
const cors = require('cors');
const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');

const { envConstants: { HOST, PORT, MONGOOSE_DB } } = require('./constants');
const { categoriesRouter, accountRouter, productRouter, orderRouter } = require('./routes');

const app = express();

mongoose.connect(MONGOOSE_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(fileUpload({}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'static')));



app.use('/categories', categoriesRouter);
app.use('/accounts', accountRouter);
app.use('/catalogs', productRouter);
app.use('/orders', orderRouter);

app.listen(PORT, HOST, () => {
  console.log(`App listen ${PORT}`);
})
