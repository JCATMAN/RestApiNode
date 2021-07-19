const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Chat = require("./chat.model")(sequelize, Sequelize);
db.Contact = require("./contact.model")(sequelize, Sequelize);
db.Admin = require("./admin.model")(sequelize, Sequelize);
db.Message = require("./message.model")(sequelize, Sequelize);


// MESSAGE FOREIGN KEYS
// Id_FK 1toM Contact => Message
db.Contact.hasMany(db.Message, {
  foreignKey: "idContact",
  onDelete: 'CASCADE',
  onCreate: 'CASCADE'
});
db.Message.belongsTo(db.Contact, {
  foreignKey: "idContact"
});

// Id_FK 1toM Contact => Message
db.Admin.hasMany(db.Message, {
  foreignKey: "idAdmin",
  onDelete: 'CASCADE',
  onCreate: 'CASCADE'
});
db.Message.belongsTo(db.Contact, {
  foreignKey: "idAdmin"
});

// Id_FK 1toM Chat => Message
db.Chat.hasMany(db.Message, {
  foreignKey: "idChat",
  onDelete: 'CASCADE',
  onCreate: 'CASCADE'
});
db.Message.belongsTo(db.Chat, {
  foreignKey: "idChat"
});

// Chat FOREIGN KEYS
// Id_FK 1toM Admin => Chat
db.Admin.hasMany(db.Chat, {
  foreignKey: "idAdmin",
  onDelete: 'CASCADE',
  onCreate: 'CASCADE'
});
db.Chat.belongsTo(db.Contact, {
  foreignKey: "idAdmin"
});

// Id_FK 1toM Contact => Chat
db.Contact.hasMany(db.Chat, {
  foreignKey: "idContact",
  onDelete: 'CASCADE',
  onCreate: 'CASCADE'
});
db.Chat.belongsTo(db.Contact, {
  foreignKey: "idContact"
});

// Export db
module.exports = db;