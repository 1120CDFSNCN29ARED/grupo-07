module.exports = (sequelize, dataTypes) => {
  let alias = "Brand";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  };
  const config = {
    tableName: "brands",
    timestamps: false,
    createdAt: "created_at",
    updateAt: "update_at",
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
