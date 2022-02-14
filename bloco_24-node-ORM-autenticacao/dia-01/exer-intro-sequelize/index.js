const express = require('express');

require('dotenv').config();

const productsController = require('./controllers/productsController');

const app = express();

app.use(express.json());

app.use('/products', productsController);

const PORT = process.env.PORT;

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`) });

