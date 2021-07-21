module.exports = (sequelize, DataTypes) => {
  // Define Admin table
  const Admin = sequelize.define(
    "admin",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      fullname: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  Admin.associate = (models) => {
    Admin.hasMany(models.chats);
    Admin.hasMany(models.messages);
  };

  return Admin;
};
