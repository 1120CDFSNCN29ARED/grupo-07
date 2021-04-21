const sequelize = require("sequelize");
const { Sequelize } = require("sequelize");
const users = require("./users");

module.exports = (sequelize, dataType) => {
  const alias = "Cart";
  const col = {
    id: {
      type: dataType.INTEGRER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: dataType.INTEGRER,
      reference: users,
      key: id,
    },
    productCart_id: {
      type: dataType.INTEGRER,
      reference: productCart,
      key: id,
    },
  };
  const config = {
    tableName: "cart",
    timestamps: false,
  };
  const Cart = sequelize.define(alias, col, config);
  return Cart;
};

Cart.associate = function (models) {
  Cart.hasMany(models.User, {
    foreignKey: "user_id",
    as: "user",
  });
  Cart.belongsToMany(models.Product, {
    as: "products",
    through: "productCart",
    foreignKey: "cart_id",
    otherKey: "product_id",
    timestamps: false,
  });
};
