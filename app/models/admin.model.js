module.exports = (sequelize, Sequelize) => {

    // Define Admin table
    const Admin = sequelize.define("admin", {
      idAdmin: {
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
  
    return Admin;
    
  };