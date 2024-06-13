const express = require('express');
const { requireSignIn } = require('../controllers/userControllers');
const { createPostController, getAllPostsController, getUserPostsController, deletePostController, updatePostController } = require('../controllers/postControllers');

// router object
const router = express.Router()

// CREATE POST || POST 
router.post('/create-post', requireSignIn, createPostController);

// get all posts 
router.get('/get-all-posts', getAllPostsController)

// get user posts 
router.get('/get-user-posts', requireSignIn, getUserPostsController)

// delete post 
router.delete('/delete-posts/:id', requireSignIn, deletePostController)
// update post 
router.put('/update-posts/:id', requireSignIn, updatePostController)

// exports
module.exports = router 