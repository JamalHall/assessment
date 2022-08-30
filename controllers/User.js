import User from "../models/User.js";
import ExpressError from "../utils/ExpressError.js";
// import session from "express-session";


export const signup = async (req, res, next) => {
    try {
        const {userEmail, userName, userPassword} = req.body;

        // Check to see if user already exists
        const existingUser = await User.findOne({email: userEmail.toLowerCase()});

        // If user already exists, throws an error
        if(existingUser) throw new ExpressError("User Already Exists", 404)

        // Throws error if user submits an empty password
        if(userPassword.length === 0) throw new ExpressError("Password cannot be empty", 400);

        // A new user is created and saved to MongoDB
        const newUser = new User({
            name: userName,
            password: userPassword,
            email: userEmail.toLowerCase()
        });

        await newUser.save();

        req.session.user_id = newUser._id;

        res.redirect('/parentPortal');
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try{
        const {userEmail, userName, userPassword} = req.body;
        const user = await User.findOne({email: userEmail.toLowerCase()});

        // If user can't be find an error will be thrown
        if(!user) throw new ExpressError("User Not Found", 404);

        // If entered password and the password saved in database don't match and error will be thrown
        // Passwords must be hashed in future updates for security improvement
        const isPasswordCorrect = userPassword === user.password;
        if(!isPasswordCorrect) throw new ExpressError("Password is incorrect", 401);

        req.session.user_id = user._id;

        res.redirect('/parentPortal');
    } catch(error){
        next(error)
    }
}