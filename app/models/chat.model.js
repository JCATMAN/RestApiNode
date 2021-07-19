module.exports = (sequelize, Sequelize) => {

    // Define Chats table
  const chats = sequelize.define("chats", {
    idChat: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    idContact: {
      type: Sequelize.INTEGER
    },
    idAdmin: {
      type: Sequelize.INTEGER
    },
  },{
    timestamps: false,
  });

  return chats;  

};