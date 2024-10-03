const express = require("express");
const router = express.Router();
const upload = require("../../middleware/multer");
const {
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
} = require("./posts.controllers");

router.get("/", postsGet);
router.post("/", upload.single("media"), postsCreate);

router.delete("/:postId", postsDelete);

router.put("/:postId", postsUpdate);

module.exports = router;
