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
      type: dataTypes.STRING(60),
      allowNull: false,
    },
  };
  const config = {
    tableName: "usersCategory",
    timestamps: false,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const UserCategory = sequelize.define(alias, col, config);

  return UserCategory;
};
