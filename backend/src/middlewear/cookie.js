import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

//Middlewear Function : Extracts UserID
export const validCookie = async (req, res, next) => {
    try {
      var token = req.query.cookie;

      if (!token) {
        throw new Error('Token not provided');
      }
  
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.body.userId = decoded.id;
      
      next();
    } catch (error) {
      console.error('Authentication error:', error.message);
      res.status(401).json({ error: 'Authentication failed' });
    }
  };