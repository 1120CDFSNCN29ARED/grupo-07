const { Sequelize } = require("sequelize");

module.exports = (sequelize, dataType) => {
  const alias = "Cart";
  const col = {
    id: {
      type: dataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: dataType.INTEGER,
    },
    productCart_id: {
      type: dataType.INTEGER,
    },
  };
  const config = {
    tableName: "cart",
    timestamps: false,
  };
  const Cart = sequelize.define(alias, col, config);

  Cart.associate = function (models) {
    Cart.hasMany(models.User, {
      as: "user",
      foreignKey: "user_id",
    });
    Cart.belongsToMany(models.Product, {
      as: "products",
      through: "productCart",
      foreignKey: "cart_id",
      otherKey: "product_id",
      timestamps: false,
    });
  };
  return Cart;
};
