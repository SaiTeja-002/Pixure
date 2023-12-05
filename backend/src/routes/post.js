import express from 'express';
import { validCookie } from '../middlewear/cookie.js';
import { createPost, randomPosts, searchByTitle } from '../controllers/postcontroller.js';
import { tagPost } from '../controllers/tagcontroller.js';
import { addPost } from '../controllers/usercontroller.js';

const router = express.Router();

//Post to Db -> Referene to User DB -> Reference to TagDb
router.post('/add', validCookie, createPost, addPost, tagPost);
router.get('/search/:title',validCookie,searchByTitle);
router.get('/feed',validCookie,randomPosts)
router.post('*', validCookie, (req, res) => res.status(404).json({ error: "Not Found" }))


export default router;
