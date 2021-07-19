module.exports = app => {
    const contacts = require("../controllers/contact.controller");
    const chats = require("../controllers/chat.controller");
    const admins = require("../controllers/admin.controller");
    const messages = require("../controllers/message.controller");
    const Twilio = require("../api/twilio.helper");

    var router = require("express").Router();

    // Contact router
    // Retrieve all Contacts
    router.get("/contact", contacts.findAll);

    app.use('/api/contacts', router);

    // Chat router
    // Retrieve all Contacts
    router.get("/chat", chats.findAll);

    app.use('/api/chats', router);

    // Message router
    // Retrieve all Contacts
    router.get("/message", messages.findAll);

    app.use('/api/messages', router);

    // Twilio router
    // Retrieve message
    router.post('/', async (req, res) => {

        let message = req.body.Body;
        let senderID = req.body.From;
        await Twilio.sendMessage(message, senderID);
    });

    app.use('/api/twilio', router);
};