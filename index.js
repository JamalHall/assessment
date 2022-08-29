import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'

import authRoute from './routes/auth.js'

import User from './models/User.js'



dotenv.config();
const app = express();


const dbURL = process.env.DB_URL;

mongoose.connect(dbURL).then(() => {console.log("Connected to DataBase")}).catch(error => console.log(error));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname));

// app.set('view engine', 'ejs');

// const testUser = new User({
//     name: "Sina",
//     password: "sina123",
//     email: "sina@email.com"
// });

// await testUser.save();

app.use('/auth', authRoute);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html') 
})

app.get('/parentPortal', (req, res) => {
    res.sendFile(__dirname + '/parentPortal.html')
})


// app.post('/signup', (req, res) => {
    
//     console.log(req.body);
// })

app.use((err, req, res, next) => {
    console.log("******ERRORS*****");
    res.status(err.statusCode).json(err.message);
})

const port = process.env.PORT || 3001;

app.listen(port, ()=> {
    console.log(`App running on port ${port}`);
})