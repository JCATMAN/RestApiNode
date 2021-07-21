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
    // Bot
    var msgsBot1 = 'Hola. como te puedo ayudar?'
    var msgsBot2 = 'Que tipo de auto necesita? (solo disponible(s) auto(s): Grande(s))'
    var msgsBot3 = 'En cuantos dias mas necesitas el auto?'
    var msgsBot4 = 'Se ha generado un arriendo de un auto grande para mañana'
    var sender = '+14155238886'

    // Retrieve message
    router.post('/', async (req, res) => {

        let message = req.body.Body;
        let senderID = req.body.From;

        const user = await contacts.findOrCreate({
            where: { fullname: senderID },
            default: {
                fullname: senderID,
                role: "Test",
                about: "Test",
                avatar: "Test",
                status: "Test"
            }
        });

        console.log("router", user);
        // console.log(created);


        console.log(message);
        console.log(senderID);

        if (message.toLowerCase() === "hola") {
            await Twilio.sendMessage(msgsBot1, senderID),
                console.log(msgsBot1);
            console.log(sender);
        }
        if (message.toLowerCase() === "quiero un auto") {
            await Twilio.sendMessage(msgsBot2, senderID);
            console.log(msgsBot2);
            console.log(sender);
        }
        if (message.toLowerCase() === "grande") {
            await Twilio.sendMessage(msgsBot3, senderID);
            console.log(msgsBot3);
            console.log(sender);
        }
        if (message.toLowerCase() === "para mañana" || message.toLowerCase() === "mañana") {
            await Twilio.sendMessage(msgsBot4, senderID);
            console.log(msgsBot4);
            console.log(sender);
        }
    });

    app.use('/api/twilio', router);


    // // ------------------------------------------------
    // // MOD VUEJS BACKEND
    // // ------------------------------------------------
    // // router.get("/message", messages.findAll);

    // router.get('/chats-and-contacts') => {
    //     const chatsContacts = db.Chat(db.Message)
    //         .map(Chat => {
    //             const contact = db.Contact.find(c => c.id === Chat.idContact)
    //             contact.chat = { id: db.Chat.idChat, lastMessage: Chat.messages[Chat.messages.length - 1] }
    //             return contact
    //         })
    //         .reverse()

    //     const profileUserData = {
    //         id: db.Admin.idAdmin,
    //         avatar: db.Admin.avatar,
    //         fullName: db.Admin.fullName,
    //         status: db.Admin.status,
    //     }
    //     return [200, { chatsContacts, contacts: data.contacts, profileUser: profileUserData }]
    // }

    app.use('/api/chats', router);
};