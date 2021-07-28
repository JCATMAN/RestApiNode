import express from "express";
import MessageController from "../controllers/MessageController";
import ContactController from "../controllers/ContactController";
import AdminController from "../controllers/AdminController";
import ChatController from "../controllers/ChatController";
/**
 * This is about the controller of the internal routes
 * depends of the name of the router and it's just
 * for this route
 */
const router = new express.Router();

/**
 * Route designed for do a GET petition
 */
router.get("/", async (_req, res, next) => {
  try {
    const controller = new MessageController();
    const response = await controller.findAllMessages();
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const message = req.body.Body;
    const senderId = req.body.From;
    const controller = new ContactController();
    const contactController = new ContactController();
    const adminController = new AdminController();
    const chatController = new ChatController();
    const contact = await contactController.findOrCreate(senderId);
    console.log({ contact });
    const admin = await adminController.findAdmin();
    const chat = await chatController.findOrCreateChats(contact[0].dataValues.id, admin.id);
    const response = await controller.findOrCreateContact(
      message,
      senderId,
      admin.id,
      chat[0].dataValues.id
    );
    res.json(response);
  } catch (error) {
    next(error);
  }
});

export default router;
