const connection = require('../models/connection');

const validate = async (password, firstName, lastName, email, type, id) => {
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

  // modelo teste, lugar dele nao é aqui
  if (type === 'post') {
    await connection.execute(
   `INSERT INTO connectAPI.users (first_Name, last_Name, email, password_user)
   VALUE (?,?,?,?)`, [firstName, lastName, email, password]);
  
   const [userAdd] = await connection.execute(
  `SELECT * FROM connectAPI.users WHERE first_Name = ?`, [firstName]);
    console.log(userAdd);
    return userAdd;
  } 
 
  if (type === 'put') {
    const [userAdd] = await connection.execute(
`SELECT * FROM connectAPI.users WHERE user_id = ?`, [id]);

    if (userAdd) {
      return userAdd;
    };
    
    if (userAdd) {
      const edit = await connection.execute(
 `
 UPDATE users
 SET first_name = ?
 WHERE user_id = ?`, [lastName, id]);
    }
  }

  return null;
};

module.exports = validate;
