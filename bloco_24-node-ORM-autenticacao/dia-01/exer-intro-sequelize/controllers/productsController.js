const router = require('express').Router();

const { Product } = require('../models/index.js');

router.post('/', async (req, res, _next) => {
  try {
    const { name } = req.body;
    const createProducts = await Product.create({ name });
    return res.status(201).json(createProducts);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ message: `Error: ${err.message}`});
  }
});

router.get('/', async (_req, res, _next) => {
  try {
    const products = await Product.findAll();
    return res.status(201).json(products);
  } catch (err) {
    console.log(err.message);
    return res.status(404).send({ message: `Error: ${err.message}`});
  }
});

module.exports = router;

