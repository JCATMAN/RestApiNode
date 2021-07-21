module.exports = (sequelize, DataTypes) => {
  // Define Contacts table
  const Contact = sequelize.define(
    "contacts",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fullname: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  Contact.associate = (models) => {
    Contact.hasOne(models.chats);
    Contact.hasMany(models.messages);
  };

  return Contact;
};
