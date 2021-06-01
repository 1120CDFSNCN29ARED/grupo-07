const { Sequelize } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  let alias = "Category";
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
    tableName: "category",
    timestamps: false,
  };
  const Category = sequelize.define(alias, col, config);

  Category.associate = function (models) {
    Category.belongsToMany(models.Product, {
      as: "product",
      foreignKey: "category_id",
      other: "product_id",
      through: "CategoryProduct",
    });
  };

  return Category;
};
