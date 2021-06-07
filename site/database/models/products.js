const Sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  const alias = "Product";
  const col = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: {
      type: dataTypes.STRING(60),
      allowNull: false,
    },
    price: Sequelize.INTEGER,

    description: Sequelize.TEXT,

    discount: Sequelize.INTEGER,

    picture: Sequelize.STRING(200),

    weight: Sequelize.INTEGER,

    quantity: Sequelize.INTEGER,

    brand_id:{
      type: dataTypes.INTEGER,
    },
  };

  const config = {
    timestamps: false,
    tableName: "products",
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const Product = sequelize.define(alias, col, config);

  Product.associate = function (models) {
    Product.belongsToMany(models.Category, {
      as: "categorias",
      through: "categoryProduct",
    //  timestamps: false,
    });
    Product.belongsTo(models.Brand, {
      foreignKey: "brand_id",
     as: "brand",
    });

  };
  return Product;
};
