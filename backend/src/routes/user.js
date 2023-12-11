import express from 'express';
import { validCookie } from '../middlewear/cookie.js';
import {
        deletePost, editPost, followUser, getInfo, getPosts,
        getSocialList, profileInfo, unfollowUser, updateInfo
} from '../controllers/usercontroller.js';
import { editTitle, removePost } from '../controllers/postcontroller.js';
import { removePostReferences } from '../controllers/tagcontroller.js';

const router = express.Router();

router.get('/info', validCookie, getInfo); // Get Name, Bio & Profile
router.get('/social', validCookie, getSocialList); //Get their followers and following list
router.get('/posts', validCookie, getPosts); //Get their Posts
router.patch('/update', validCookie, updateInfo); //Update name,bio & Profile
router.patch('/follow', validCookie, followUser); // follow a specific user
router.patch('/unfollow', validCookie, unfollowUser); // unfollow a user
router.get('/profile/:name', validCookie, profileInfo); //Profile Information
router.patch('/post/:index', validCookie, editPost, editTitle); // Update Post
router.delete('/post/:index', validCookie, deletePost, removePost, removePostReferences);
router.post('*', validCookie, (req, res) => res.status(404).json({ error: "Not Found" }))

export default router;