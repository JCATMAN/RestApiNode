module.exports = (sequelize, Sequelize) => {

    // Define Chats table
  const chats = sequelize.define("chats", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    userId: {
      type: Sequelize.INTEGER
    },
  },{
    timestamps: false,
  });

  return chats;  

};