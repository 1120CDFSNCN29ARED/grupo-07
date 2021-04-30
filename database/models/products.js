const { Sequelize } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  const alias = "Product";
  const col = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: {
      type: dataTypes.STRING(200),
      allowNull: false,
    },
    price: Sequelize.DECIMAL(3, 2),

    description: Sequelize.TEXT,

    discount: Sequelize.INTEGER,

    picture: Sequelize.STRING(500),

    weight: Sequelize.DECIMAL(4, 2),

    quantity: Sequelize.INTEGER,

    brand_id: Sequelize.INTEGER(10),

    category_id: Sequelize.INTEGER(10),
  };

  const config = {
    timestamps: false,
    tableName: "products",
  };

  const Product = sequelize.define(alias, col, config);

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
  };
  return Product;
};
