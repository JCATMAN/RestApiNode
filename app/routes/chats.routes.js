module.exports = app => {
    const contacts = require("../controllers/contact.controller");
    const chats = require("../controllers/chat.controller");
    const messages = require("../controllers/message.controller");

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
};