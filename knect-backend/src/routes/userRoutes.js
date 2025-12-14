import express from "express";
import protect from "../middleware/authMiddleware.js";
import { updateProfile } from "../controllers/userController.js";
const router = express.Router();

router.get("/me", protect, (req, res) => {
  res.json(req.user);
});

router.patch("/profile", protect, updateProfile);

export default router;
