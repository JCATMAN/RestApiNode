import express from "express";
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
    const controller = new ChatController();
    const response = await controller.findAllChats();
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.post("/:adminId", async (req, res, next) => {
  try {
    const controller = new ChatController();
    const { contactId } = req.body;
    const { adminId } = req.params;
    const response = await controller.findChatWithMessages(contactId, adminId);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

export default router;
