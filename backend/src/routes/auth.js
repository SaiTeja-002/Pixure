import express from 'express';
import { signUp } from '../controllers/usercontroller.js';

const router = express.Router();

router.post('/login', (req,res) => res.status(200).json({page : "Login Page"}));
router.post('/signup',signUp);
router.post('*',(req,res) => res.status(404).json({error : "Not Found"}))

export default router;