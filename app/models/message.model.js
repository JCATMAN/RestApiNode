module.exports = (sequelize, Sequelize) => {

    // Define Messages table
 const Message = sequelize.define("messages", {
   idMessage: {
     type: Sequelize.INTEGER,
     primaryKey: true,
     autoIncrement: true
   },
   message: {
     type: Sequelize.STRING
   },
   time: {
     type: Sequelize.DATE
   },
   idContact: {
     type: Sequelize.INTEGER
   },
   idAdmin: {
    type: Sequelize.INTEGER
  },
   idChat: {
     type: Sequelize.INTEGER
   }
 },{
  timestamps: false,
});

 return Message;
 
};