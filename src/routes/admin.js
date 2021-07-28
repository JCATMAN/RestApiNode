import express from "express";
import AdminController from "../controllers/AdminController";
import ContactController from "../controllers/ContactController";
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
    const controller = new AdminController();
    const response = await controller.findAllAdmins();
    res.json(response);
  } catch (error) {
    next(error);
  }
});

/** localhost:3002/api/admin/message */
router.post("/message/:senderId", async (req, res, next) => {
  try {
    const controller = new AdminController();
    const { message } = req.body;
    const { senderId } = req.params;
    const contactController = new ContactController();
    const chatController = new ChatController();
    const contact = await contactController.findContactBySenderId(senderId);
    const admin = await controller.findAdmin();
    const chat = await chatController.findOrCreateChats(contact.id, admin.id);
    const response = await controller.sendAdminMessage(
      message,
      contact.id,
      admin.id,
      chat.id
    );
    res.json(response);
  } catch (error) {
    next(error);
  }
});

export default router;
