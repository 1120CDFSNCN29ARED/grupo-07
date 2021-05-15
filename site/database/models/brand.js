const { Sequelize } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  let alias = "Brand";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    kind: {
      type: dataTypes.STRING(30),
      allowNull: false,
    },
  };

  const config = {
    tableName: "brands",
    timestamps: false,
  };

  const Brand = sequelize.define(alias, cols, config);

  Brand.associate = function (models) {
    Brand.belongsTo(models.Product, {
      as: "product",
      foreignKey: "product_id",
    });
  };
  return Brand;
};
