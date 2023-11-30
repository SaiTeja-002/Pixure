import express from 'express'; //Web Application Framework
import bodyParser from 'body-parser'; // Express Middlewear -> parses req.body and popolates with parsed data
import cors from 'cors'; //Secure Data Transfer between browser & server
import mongoose from 'mongoose'; //MonogDb API
import dotenv from "dotenv" //Environment Variables
import authRoutes from "./routes/auth.js";

dotenv.config()
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))  //Enabling Parse Json Data
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true })) //Enabling Parse UrlEncoded Data
app.use(cors());

app.use('/auth', authRoutes);

mongoose.connect(process.env.DB_URL)
    .then(() => app.listen(process.env.PORT, () => console.log(`Server Running on Port: ${process.env.PORT}`)))
    .catch((error) => console.log(`MongoDb Connection Error : ${error}`));

