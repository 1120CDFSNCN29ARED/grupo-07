const Sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  const alias = "Brand";
  const col = {
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
    tableName: "brands",
    timestamps: false,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const Brand = sequelize.define(alias, col, config);

  
  return Brand;
};
