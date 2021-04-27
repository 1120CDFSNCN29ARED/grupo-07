module.exports = (sequelize, dataTypes) => {
  let alias = "UserCategory";
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
    tableName: "UsersCategories",
    timestamps: false,
    createdAt: "created_at",
    updateAt: "update_at",
  };
  const UserCategory = sequelize.define(alias, cols, config);

  UserCategory.associate = function (models) {
    UserCategory.belongsTo(models.User, {
      as: "userCategory",
      foreignKey: "user_id",
    });
  };
  return UserCategory;
};
