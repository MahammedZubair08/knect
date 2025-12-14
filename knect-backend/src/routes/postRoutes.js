import express from "express";
import protect from "../middleware/authMiddleware.js";
import { createPost ,getFeed} from "../controllers/postController.js";

const router = express.Router();

router.post("/", protect, createPost);
router.get("/feed", protect, getFeed);

export default router;
