import express from "express";
import MessageController from "../controllers/MessageController";
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

export default router;
