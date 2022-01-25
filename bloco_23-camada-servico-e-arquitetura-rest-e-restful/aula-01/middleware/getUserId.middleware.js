const getUser = require('../models/getUser.model');

const getUserId = async (req, res, next) => {

  try {
    const { id } = req.params;

    const userValid = await getUser(id);

    const msgErr = {
      "error": true,
      "message": "Usuário não encontrado"
    }

    !userValid ? res.status(404).json(msgErr) : res.status(200).send(userValid);

    next();

  } catch (err) {
    console.trace(err);
  }
};

module.exports = getUserId;
