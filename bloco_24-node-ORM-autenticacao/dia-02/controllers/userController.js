const { Users } = require('../models/index');

const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const newUser = await Users.create({ name, email });

    return res.status(201).json(newUser);

  } catch (err) {
    console.log(err);

    return res.status(404).send(`Error: ${err.message}`);
  }
};

module.exports = { createUser };


