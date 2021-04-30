const { Sequelize } = require("sequelize");

module.exports = (sequelize, datatypes) => {
  const alias = "User";
  const col = {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING(12),
    surname: Sequelize.STRING(30),
    picture: Sequelize.STRING(500),
    email: {
      type: datatypes.STRING(100),
      allowNull: false,
    },
    pass: {
      type: datatypes.STRING(50),
      allowNull: false,
    },
    street: Sequelize.STRING(20),
    floorLevel: Sequelize.INTEGER,
    betweenStreet: Sequelize.STRING(100),
    locality: Sequelize.STRING(20),
    cp: Sequelize.TINYINT(4),
    phone: Sequelize.INTEGER,
    birthday: Sequelize.DATE,
    usercategory_id: {
      type: datatypes.TINYINT(2),
    },
  };
  const config = {
    tableName: "users",
    timestamps: false,
  };
  const User = sequelize.define(alias, col, config);

  User.associate = function (models) {
    User.belongsTo(models.Cart, {
      foreingKey: "user_id",
      as: "cart",
    });
  };
  return User;
};
