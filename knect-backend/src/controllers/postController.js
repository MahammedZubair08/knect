import Post from "../models/Post.js";
export const createPost = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ message: "Content is required" });
    }
   
    const post = await Post.create({
      author: req.user._id,
      content,
    });
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    console.log(req.body);
    res.status(500).json({ message: "Post creation failed" });
  } };



export const getFeed = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name headline")
      .sort({ createdAt: -1 })
      .limit(20);

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch feed" });
  }
};
