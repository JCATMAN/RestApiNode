module.exports = (sequelize, Sequelize) => {

    // Define Contacts table
    const Contact = sequelize.define("contacts", {
      idContact: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fullname: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
    },{
      timestamps: false,
    });
  
    return Contact;
    
  };