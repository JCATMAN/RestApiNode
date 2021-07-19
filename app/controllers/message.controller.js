const db = require("../models");
const Message = db.Message;
const Op = db.Sequelize.Op;

// Chat controllers
exports.findAll = (req, res) => {
    const idMessage = req.query.idMessage;
    var condition = idMessage ? { idMessage: { [Op.like]: `%${idMessage}%` } } : null;
  
    Message.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving messages."
        });
      });
  };