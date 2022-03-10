const express = require('express');

const app = express();

const booksRouter = require('./routes/booksRouter');

require('dotenv').config();

app.use(express.json());

app.use('/books', booksRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Rodando na porta http://localhost:${PORT}`));
