const Sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  let alias = "Category";
  let col = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    kind: {
      type: dataTypes.STRING(60),
      allowNull: false,
    },
  };

  const config = {
    tableName: "categories",
    timestamps: false,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const Category = sequelize.define(alias, col, config);

  Category.associate = function (models) {
    Category.belongsToMany(models.Product, {
      as: "productos",
      through: "categoryProduct",
    });
  };

  return Category;
};
