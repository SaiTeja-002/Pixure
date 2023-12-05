import express from 'express';
import { validCookie } from '../middlewear/cookie.js';
import { searchHashtagsByName } from '../controllers/tagcontroller.js';

const router = express.Router();
router.get("/search",validCookie,searchHashtagsByName)
router.post('*', validCookie, (req, res) => res.status(404).json({ error: "Not Found" }))

export default router;