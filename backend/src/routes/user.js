import express from 'express';
import { validCookie } from '../middlewear/cookie.js';
import { followUser, getInfo, getSocialList, unfollowUser, updateInfo } from '../controllers/usercontroller.js';

const router = express.Router();

router.get('/profile', validCookie, getInfo); // Get Name, Bio & Profile
router.get('/social',validCookie,getSocialList); //Get their followers and following list
router.patch('/update', validCookie, updateInfo); //Update name,bio & Profile
router.patch('/follow',validCookie,followUser); // follow a specific user
router.patch('/unfollow',validCookie,unfollowUser); // unfollow a user
router.get('/posts', validCookie, (req, res) => res.status(201).json({ message: "Posts" })); //Get Users post
router.post('*', validCookie, (req, res) => res.status(404).json({ error: "Not Found" }))

export default router;