module.exports = (sequelize, DataTypes) => {
  // Define Chats table
  const Chat = sequelize.define(
    "chats",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      contactId: {
        type: DataTypes.INTEGER,
      },
      adminId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );

  Chat.associate = (models) => {
    Chat.hasMany(models.messages);
    Chat.belongsTo(models.contacts, {
      foreignKey: {
        chatId: "id",
      },
    });
    Chat.belongsTo(models.admin, {
      foreignKey: {
        chatId: "id",
      },
    });
  };

  return Chat;
};
