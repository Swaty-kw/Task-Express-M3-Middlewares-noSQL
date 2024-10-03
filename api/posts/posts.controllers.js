const Post = require("../../models/Post");
const errorsHandeler = require("./middlewareHandelr.js/errorsHandeler");

exports.postsCreate = async (req, res, next, error) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next();
  }
};

exports.postsDelete = async (req, res, next, err) => {
  const { postId } = req.params;
  try {
    const foundPost = await Post.findById(postId);
    if (foundPost) {
      await foundPost.deleteOne();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "post not found" });
    }
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next();
  }
};

exports.postsUpdate = async (req, res, next, err) => {
  const { postId } = req.params;
  try {
    const foundPost = await Post.findById(postId);
    if (foundPost) {
      await foundPost.updateOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "post not found" });
    }
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next();
  }
};

exports.postsGet = async (req, res, next, err) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next();
  }
};
