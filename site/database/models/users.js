const Sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  const alias = "User";
  const col = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: Sequelize.STRING(30),

    surname: Sequelize.STRING(30),

    picture: Sequelize.STRING(200),

    email: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },

    pass: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },

    street: Sequelize.STRING(200),

    floorLevel: Sequelize.INTEGER,

    betweenStreet: Sequelize.STRING(100),

    locality: Sequelize.STRING(30),

    cp: Sequelize.INTEGER,

    phone: Sequelize.INTEGER,

    birthday: Sequelize.DATEONLY,

    usercategory_id: {
      type: dataTypes.INTEGER,
    },

  };
  const config = {
    tableName: "users",
    timestamps: false,
    createdAt: "created_at",
    updatedAt: "updated_at",
  // underscored: true para que no sea por default camelcase
  };
  
  const User = sequelize.define(alias, col, config);

  User.associate = function (models) {
  //  User.belongsTo(models.Cart, {
   //   foreignKey: "user_id",//
  //    as: "carts",//
   // });
    User.belongsTo(models.UserCategory,{
      as: 'userCategorias', 
      foreignKey: 'usercategory_id', 
    });
  };
  return User;
};
