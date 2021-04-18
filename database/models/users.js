const { Sequelize } = require("sequelize");

module.exports = (sequelize, datatype) => {
  const alias = "User";
  const col = {
    id: {
      type: datatype.INTEGRER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING(12),
    surname: Sequelize.STRING(30),
    picture: Sequelize.STRING(500),
    email: {
      type: datatype.STRING(100),
      allowNull: false,
    },
    pass: {
      type: datatype.STRING(50),
      allowNull: false,
    },
    street: Sequelize.STRING(20),
    floorLevel: Sequelize.INTEGRER,
    betweenStreet: Sequelize.STRING(100),
    locality: Sequelize.STRING(20),
    cp: Sequelize.TINYINT(4),
    phone: Sequelize.INTEGRER,
    birthday: Sequelize.DATE,
    usercategory_id: {
      type: datatype.TINYINT(2),
      reference: Usercategory,
      key: id,
    },
  };
  const config = {
    tableName: "users",
    timestamps: false,
  };
  const User = sequelize.define(alias, col, config);
  return User;
};
