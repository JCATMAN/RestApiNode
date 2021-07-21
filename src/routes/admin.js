import express from "express";
import AdminController from "../controllers/AdminController";
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

export default router;