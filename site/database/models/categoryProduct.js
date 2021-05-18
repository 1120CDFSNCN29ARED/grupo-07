const { Sequelize } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  let alias = "CategoryProduct";
  let col = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    kind: {
      type: dataTypes.STRING(20),
      allowNull: false,
    },
  };

  const config = {
    tableName: "categoryProduct",
    timestamps: false,
  };
  const CategoryProduct = sequelize.define(alias, col, config);

  CategoryProduct.associate = function (models) {
    CategoryProduct.belongsToMany(models.Product, {
      as: "product",
      foreignKey: "category_id",
      other: "product_id",
      through: "CategoryProduct",
    });
  };

  return CategoryProduct;
};
