const express = require('express');

require('dotenv').config();

const app = express();

app.use(express.json());

const userRouter = require('./routes/userRouter');
const productsRouter = require('./routes/productsRouter');

app.use('/users', userRouter);

app.use('/products', productsRouter);

const PORT = process.env.PORT;

app.listen(PORT, ()=> console.log(`Rodando na porta ${PORT}`));
