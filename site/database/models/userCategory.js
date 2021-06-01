const { Sequelize } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  let alias = "UserCategory";
  let col = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    kind: {
      type: dataTypes.STRING(5),
      allowNull: false,
    },
  };
  const config = {
    tableName: "UserCategory",
    timestamps: false,
  };
  const UserCategory = sequelize.define(alias, col, config);

  UserCategory.associate = function (models) {
    UserCategory.belongsTo(models.User, {
      as: "userCategory",
      foreignKey: "user_id",
    });
  };
  return UserCategory;
};
