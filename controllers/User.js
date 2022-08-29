import User from "../models/User.js";
import ExpressError from "../utils/ExpressError.js";

export const signup = async (req, res, next) => {
    try {
        const {userEmail, userName, userPassword} = req.body;

        const existingUser = await User.findOne({email: userEmail.toLowerCase()});

        if(existingUser) throw new ExpressError("User Already Exists", 404)

        if(userPassword.length === 0) throw new ExpressError("Password cannot be empty", 400);

        const newUser = new User({
            name: userName,
            password: userPassword,
            email: userEmail.toLowerCase()
        });

        await newUser.save();

        console.log("Here is your info: ", req.body);
        console.log(userEmail)
        console.log(userName)
        console.log(userPassword)

        res.send("User Created");
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try{
        const {userEmail, userName, userPassword} = req.body;
        const user = await User.findOne({email: userEmail.toLowerCase()});

        if(!user) throw new ExpressError("User Not Found", 404);

        const isPasswordCorrect = userPassword === user.password;

        if(!isPasswordCorrect) throw new ExpressError("Password is incorrect", 401);
 
        console.log(req.body)
        res.send("User Found");
    } catch(error){
        next(error)
    }
}