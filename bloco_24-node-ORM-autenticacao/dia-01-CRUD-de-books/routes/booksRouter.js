const express = require('express');
const router = express.Router();

const booksController = require('../controllers/booksController');

router.get('/:id', booksController.getById);
router.get('/', booksController.getAll);

router.post('/:id', booksController.bookUpdate);
router.post('/', booksController.createBook);

router.delete('/:id', booksController.deleteBook);

module.exports = router;