const validate = (password, firstName, lastName, email) => {

  if (password.length < 6) {
    return {
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    }
  }

  if (!firstName.length) {
    return {
      "error": true,
      "message": "Campo 'firstName' inválido"
    }
  }
  
  if (!lastName.length) {
    return {
      "error": true,
      "message": "Campo 'lastName' inválido"
    }
  }

  if (!email.length) {
    return {
      "error": true,
      "message": "Campo 'email' inválido"
    }
  }

  return 'ok';
};

module.exports = validate;