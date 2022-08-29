import User from "../models/User.js";

export const signup = async (req, res, next) => {
    try {
        console.log("Here is your info: ", req.body);
        const {email, name, password} = req.body;
        res.send("Thank you");
    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, res, next) => {
    try{
        console.log(req.body)
    } catch(error){
        console.log(error);
    }
}