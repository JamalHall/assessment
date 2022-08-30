import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'
// import session from 'express-session'
import session from 'cookie-session'
import authRoute from './routes/auth.js'




dotenv.config();
const app = express();


const dbURL = process.env.DB_URL;

mongoose.connect(dbURL).then(() => {console.log("Connected to DataBase")}).catch(error => console.log(error));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({secret: process.env.SESSION_SECRET}));


// Since the type in package.json is set to 'module', __dirname has to be defined
// type 'module' allows us to use the modern syntax such as: 'import' instead 'require'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Here the static files such as HTML, CSS, JS files will be served and can be accessed while the app is deployed
app.use(express.static(__dirname));

// This route is used for login and signup purposes
app.use('/auth', authRoute);

// Home Page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html') 
})

// Parent Portal route which user has to be signed in first to access
app.get('/parentPortal', (req, res) => {
    if(!req.session.user_id){
        res.send("<h1>You are not authorized - Login using Parent Portal</h1>")
    }
    res.sendFile(__dirname + '/parentPortal.html')
})

// Error Handling middleware
app.use((err, req, res, next) => {
    console.log("******ERRORS*****");
    res.status(err.statusCode).json(err.message);
})

const port = process.env.PORT || 3001;

app.listen(port, ()=> {
    console.log(`App running on port ${port}`);
});