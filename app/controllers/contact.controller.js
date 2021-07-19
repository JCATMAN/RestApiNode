const db = require("../models");
const Contact = db.Contact;
const Op = db.Sequelize.Op;

// Contacts controllers
exports.findAll = (req, res) => {
    const idContact = req.query.idContact;
    var condition = idContact ? { idContact: { [Op.like]: `%${idContact}%` } } : null;
  
    Contact.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving contacts."
        });
      });
  };