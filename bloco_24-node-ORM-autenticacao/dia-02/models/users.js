const Users = (sequelize, DataTypes) => {
  const users = sequelize.define('Users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  });

  return users;
};

module.exports = Users;