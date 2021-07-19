const db = require("../models");
const Admin = db.Admin;
const Op = db.Sequelize.Op;

// Chat controllers
exports.findAll = (req, res) => {
    const idAdmin = req.query.idAdmin;
    var condition = idAdmin ? { idAdmin: { [Op.like]: `%${idAdmin}%` } } : null;
  
    Chat.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving admins."
        });
      });
  };