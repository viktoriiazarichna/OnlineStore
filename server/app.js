require('dotenv').config();
const cors = require('cors');
const express = require('express');

const { envConstants: { HOST, PORT, MONGOOSE_DB } } = require('./constants');
const { registrationRouter } = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/registration', registrationRouter);

app.listen(PORT, HOST, () => {
  console.log(`App listem ${PORT}`);
})