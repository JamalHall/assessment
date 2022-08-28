import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';



dotenv.config();
const app = express();


const dbURL = process.env.DB_URL;

mongoose.connect(dbURL).then(() => {console.log("Connected to DataBase")}).catch(error => console.log(error));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 3001;

app.listen(port, ()=> {
    console.log(`App running on port ${port}`);
})