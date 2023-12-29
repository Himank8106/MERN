const express = require('express')
const router = express.Router()

// Import Controller
const {likePost, unlikePost} = require('../controllers/LikeController')
const {createComment} = require('../controllers/CommentController')
const {createPost, getAllPosts} = require('../controllers/postController')

// Mappping Routes
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);

module.exports = router;