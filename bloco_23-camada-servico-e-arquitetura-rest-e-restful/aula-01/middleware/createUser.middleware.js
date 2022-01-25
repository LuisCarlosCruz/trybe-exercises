const validate = require('../models/validate.model')

const createUser = async (req, res, next) => {
  try {
    const { password, firstName, lastName, email } = req.body;

    const userValid = await validate(password, firstName, lastName, email);
    
    userValid === 'ok' ? null : res.status(400).send(userValid);

    const newUser = {
      "id": 1,
      firstName,
      lastName,
      email
    }
    return res.status(201).send(newUser);
  } catch (error) {
    console.log(`Error: `, error);
  }
  next();
}

module.exports = createUser;
