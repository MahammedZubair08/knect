import express from "express";
import protect from "../middleware/authMiddleware.js";
import { createPost ,getFeed, toggleLike, addComment,getConnectionsFeed} from "../controllers/postController.js";

const router = express.Router();

router.post("/", protect, createPost);
router.get("/feed", protect, getFeed);
router.patch("/:id/like", protect, toggleLike);
router.post("/:id/comment", protect, addComment);
router.get("/connections-feed", protect, getConnectionsFeed);

export default router;
