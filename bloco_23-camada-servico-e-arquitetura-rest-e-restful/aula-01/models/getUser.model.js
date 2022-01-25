const connection = require('./connection');

const getUser = async (id) => {
  const [user] = await connection.execute(`
    SELECT * FROM users WHERE user_id = ?`, [id]);

    return user[0];
}

module.exports = getUser;
