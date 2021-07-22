module.exports = (sequelize, DataTypes) => {
  // Define Messages table
  const Message = sequelize.define(
    "messages",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      message: {
        type: DataTypes.STRING,
      },
      time: {
        type: DataTypes.DATE,
      },
      contactId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      adminId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      chatId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );

  Message.associate = (models) => {
    Message.belongsTo(models.admin, {
      foreignKey: {
        messageId: "id",
      },
    });

    Message.belongsTo(models.contacts, {
      foreignKey: {
        messageId: "id",
      },
    });

    Message.belongsTo(models.chats, {
      foreignKey: {
        messageId: "id",
      },
    });
  };

  return Message;
};
