const validate = require('../models/validate.model');

const editarUserId = async (req, res, next) => {

  const { id } = req.params;

  const {firstName, lastName, email, password} = req.body;
  
  const isValid = await validate(password, firstName, lastName, email, 'put', id);

  const msgErr =  {
    "error": true,
    "message": "Usuário não encontrado"
  }

  !isValid.length ? res.status(404).send(msgErr) : res.status(404).send(isValid);

  next();
}

module.exports = editarUserId;
