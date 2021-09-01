require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const { envConstants: { HOST, PORT, MONGOOSE_DB } } = require('./constants');
const { registrationRouter } = require('./routes');

const app = express();

mongoose.connect(MONGOOSE_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/registration', registrationRouter);

app.listen(PORT, HOST, () => {
  console.log(`App listem ${PORT}`);
})