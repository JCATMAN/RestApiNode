const db = require("../models");
const Chat = db.Chat;
const Op = db.Sequelize.Op;

// Chat controllers
exports.findAll = (req, res) => {
    const idChat = req.query.idChat;
    var condition = idChat ? { idChat: { [Op.like]: `%${idChat}%` } } : null;
  
    Chat.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving chats."
        });
      });
  };

