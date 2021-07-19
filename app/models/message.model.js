module.exports = (sequelize, Sequelize) => {

    // Define Messages table
 const Message = sequelize.define("messages", {
   idMessage: {
     type: Sequelize.INTEGER,
     primaryKey: true
   },
   message: {
     type: Sequelize.STRING
   },
   time: {
     type: Sequelize.DATE
   },
   id: {
     type: Sequelize.INTEGER
   },
   idChat: {
     type: Sequelize.INTEGER
   },
 },{
  timestamps: false,
});

 return Message;
 
};