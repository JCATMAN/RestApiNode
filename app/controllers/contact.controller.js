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

  // { where: { fullname: 'whatsapp:+56966472200' } }
exports.findOrCreate = (req, res) => {
  console.log("controller", req);
    const fullname = req.where.fullname;
    console.log("fullname", fullname);
    // var condition = fullname ? { fullname: { [Op.fullname]: `%${fullname}%` } } : null;
  
    Contact.findOrCreate({ where: {fullname: fullname} })
      .then(data => {
        console.log("data", data);
        // res.send(data);
      })
      .catch(err => {
        // res.status(500).send({
        //   message:
        //     err.message || "Some error occurred while retrieving contacts."
        // });
        console.log("err", err);
      });
  };


