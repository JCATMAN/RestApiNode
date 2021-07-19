module.exports = (sequelize, Sequelize) => {

    // Define Contacts table
    const Contact = sequelize.define("contacts", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
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
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
    },{
      timestamps: false,
    });
  
    return Contact;
    
  };