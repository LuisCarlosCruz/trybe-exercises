const { StatusCodes } = require('http-status-codes');

const { Book } = require('../models/index.js');

const createBook = async (req, res) => {
  try {
    const { name, categoria, ano } = req.body;
    const newBook = await Book.create({ name, categoria, ano });

    return res.status(StatusCodes.CREATED).json(newBook);
  } catch (err) {
    console.log(err.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Interal Error'});
  }
}

const getAll = async (_req, res) => {
  try {
    const booksAll = await Book.findAll();

    return res.status(StatusCodes.OK).json(booksAll);
  } catch (err) {
    console.log(err.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Interal Error'});
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    return res.status(StatusCodes.OK).json(book);
  } catch (err) {
    console.log(err.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
}

const bookUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, categoria, ano } = req.body;

    const [bookUp] = await Book.update({ name, categoria, ano }, { where: { id } });

    if(!bookUp) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao tentar atualizar!'});

    return res.status(StatusCodes.CREATED).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const bookDel = await Book.destroy({ where: { id } });

    if(!bookDel) return res.status(StatusCodes.NOT_FOUND).send({ message: 'Livro não encontrado!'});
    
    return res.status(StatusCodes.OK).send({ message: 'Livro deletado com sucesso!'});
  } catch (err) {
    console.log(err.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
};

module.exports = { getAll, createBook, getById, bookUpdate, deleteBook };
