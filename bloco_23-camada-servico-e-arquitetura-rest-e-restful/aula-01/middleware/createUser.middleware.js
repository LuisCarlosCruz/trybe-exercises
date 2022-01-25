const validate = require('../models/validate.model')

const createUser = async (req, res, next) => {
  try {
    const { password, firstName, lastName, email } = req.body;

    const userValid = await validate(password, firstName, lastName, email, 'post');
    
    userValid.length ? null : res.status(201).send(userValid);

    return res.status(201).send(userValid);
  } catch (error) {
    console.log(`Error: `, error);
  }
  next();
}

module.exports = createUser;
