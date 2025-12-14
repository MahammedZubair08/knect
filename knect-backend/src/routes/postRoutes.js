import express from "express";
import protect from "../middleware/authMiddleware.js";
import { createPost ,getFeed, toggleLike, addComment} from "../controllers/postController.js";

const router = express.Router();

router.post("/", protect, createPost);
router.get("/feed", protect, getFeed);
router.patch("/:id/like", protect, toggleLike);
router.post("/:id/comment", protect, addComment);

export default router;
