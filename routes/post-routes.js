const express = require("express");
const {
  getPost,
  deletePost,
  getEditPost,
  editPost,
  getPosts,
  getAddPosts,
  addPosts,
} = require("../controllers/post-controller");

const router = express.Router();

router.get("/posts/:id", getPost);
router.delete("/posts/:id", deletePost);
router.get("/edit/:id", getEditPost);
router.put("/edit/:id", editPost);
router.get("/posts", getPosts);
router.post("/add-post", addPosts);
router.get("/add-post", getAddPosts);

module.exports = router;
