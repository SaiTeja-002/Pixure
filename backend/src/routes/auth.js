import express from 'express';
import { login, signUp } from '../controllers/usercontroller.js';

const router = express.Router();

router.post('/login', login); 
router.post('/signup',signUp);
router.post('*',(req,res) => res.status(404).json({error : "Not Found"}))

export default router;