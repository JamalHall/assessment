import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoute from './routes/auth.js'

import User from './models/User.js'



dotenv.config();
const app = express();


const dbURL = process.env.DB_URL;

mongoose.connect(dbURL).then(() => {console.log("Connected to DataBase")}).catch(error => console.log(error));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// const testUser = new User({
//     name: "Sina",
//     password: "sina123",
//     email: "sina@email.com"
// });

// await testUser.save();

app.use('/auth', authRoute);


// app.post('/signup', (req, res) => {
    
//     console.log(req.body);
// })

const port = process.env.PORT || 3001;

app.listen(port, ()=> {
    console.log(`App running on port ${port}`);
})