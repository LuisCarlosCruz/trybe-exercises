const { Product } = require('../models/index');

const createProducts = async (req, res, next) => {
  try {
    const {name, description} = req.body;

    const newProd = await Product.create({name, description});

    return res.status(201).json(newProd);
    
  } catch (err) {
    console.error(err.message);
    return status(500).json({ message: `Erro interno ` });
  }
};

module.exports = { createProducts };
