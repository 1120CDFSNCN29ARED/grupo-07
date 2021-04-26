const sequelize = require("sequelize");
const { Sequelize } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  const alias = "Product";
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },

    image: {
      type: dataTypes.VARCHAR(1000),
      allowNull: false,
    },

    description: {
      type: dataTypes.TEXT(200),
      allowNull: false,
    },

    price: {
      type: dataTypes.VARCHAR(100),
      allowNull: false,
    },

    discount: {
      type: dataTypes.VARCHAR(100),
      allowNull: false,
    },

    weight: {
      type: dataTypes.VARCHAR(100),
      allowNull: false,
    },

    quantity: {
      type: dataTypes.VARCHAR(100),
      allowNull: false,
    },

    category_id: dataTypes.BIGINT(10).UNSIGNED,
  };

  const config = {
    timestamps: false,
    createdAt: "created_at",
    updateAt: "update_at",
    tableName: "products",
  };

  const Products = sequelize.define(alias, cols, config);
};

Product.associate = function (models) {
  Product.belongsToMany(models.Category, {
    as: "category",
    foreignKey: "product_id",
    other: "category_id",
    through: "CategoryProduct",
  });
  Product.belongsTo(models.Brand, {
    as: "brand",
    foreignKey: "brand_id",
  });
  Product.belongsToMany(models.Cart, {
    as: "cart",
    foreignKey: "product_id",
    other: "cart_id",
    through: "CartProduct",
  });

  return Product;
};
