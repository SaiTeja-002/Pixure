import express from 'express'; //Web Application Framework
import bodyParser from 'body-parser'; // Express Middlewear -> parses req.body and popolates with parsed data
import cors from 'cors'; //Secure Data Transfer between browser & server
import mongoose from 'mongoose'; //MonogDb API
import dotenv from "dotenv" //Environment Variables

//Routes
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import postRoute from "./routes/post.js";
import tagRoute  from "./routes/tag.js";

dotenv.config()
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))  //Enabling Parse Json Data
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true })) //Enabling Parse UrlEncoded Data
app.use(cors());

app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/post', postRoute);
app.use('/tag' , tagRoute );


mongoose.connect(process.env.DB_URL)
    .then(() => app.listen(process.env.PORT, () => console.log(`Server Running on Port: ${process.env.PORT}`)))
    .catch((error) => console.log(`MongoDb Connection Error : ${error}`));

