import User from '../models/users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();
export const signUp = async (req, res) => {
    var name = req.body.name;
    var password = req.body.password;
    var email = req.body.email;

    try {
        let existingUser = await User.findOne({ email: email, name: name });

        if (existingUser) { // 400 - Bad Rquest
            return res.status(400).json({ message: 'User already exists' });
        }
        let hashedPassword = await bcrypt.hash(password, 12); //Password Hashing
        let newUser = new User({
            name: name,
            password: hashedPassword,
            email: email,
            followers: [],
            following: [],
            posts: [],
        });
        await newUser.save(); //Saving User to Db

        //Cookie Generation
        let token = jwt.sign({id: newUser._id }, process.env.SECRET_KEy, { expiresIn: '1h' });

        res.status(201).json({cookie: token }); //201 - Successful Creation
    } catch (error) {  //Unexpected Failure
        res.status(500).json({ message: 'Something went wrong' });
    }
}