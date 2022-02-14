const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define('Product', {
    name: DataTypes.STRING
  });

  return Products;
};

module.exports = Products;