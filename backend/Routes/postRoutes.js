// routes/postRoutes.js
const express = require('express');
const { updatePost, createPost, getAllPosts, getUserPosts } = require('../controllers/postController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Ensure the user is authenticated

router.post('/create', authMiddleware, createPost)

// Route to update a post
router.put('/:postId', authMiddleware, updatePost);

router.get('/all-post', getAllPosts);

router.get('/my-post', getUserPosts);

module.exports = router;
