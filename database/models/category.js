module.exports = (sequelize, dataTypes) => {
  let alias = "Category";
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
    tableName: "categories",
    timestamps: false,
    createdAt: "created_at",
    updateAt: "update_at",
  };
  const Category = sequelize.define(alias, cols, config);

  Category.associate = function (models) {
    Category.belongsToMany(models.Product, {
      as: "product",
      foreignKey: "category_id",
      other: "product_id",
      through: "CategoryProduct",
    });
  };

  return Category;
};
