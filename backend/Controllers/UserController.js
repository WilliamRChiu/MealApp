require('dotenv').config();
const User=  require('../Schema/UserSchema');
const jwt = require('jsonwebtoken');
const validator = require('validator')

const createToken = (_id) =>{
    return jwt.sign({_id: _id}, process.env.SECRET_KEY, {expiresIn: '3d'});
}

const signUpUser = async(req,res)=>{
    const {email, password} = req.body
    if(!email||!password){
        res.status(400).json({error: "Fill in all sections first"})
    }
    if (!validator.isEmail(email)){
        throw Error("Email is not valid");
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Password is not Strong Enough");
    }
    try{
        const exists = await User.findOne({email: email});
        if(exists){
            throw Error("Email in use already");
        }
        const user = await User.create({email: email, password: password});//this also auto saves to the database, therefore invoking the pre command for saves
        const token = createToken(user._id);
        res.status(200).json({email, token});
    }
    catch(e){
        console.log(e.message);
        res.status(400).json({message: e.message});
    }
}

const loginUser = async(req,res)=>{
    const {email, password} = req.body
    try{
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.status(200).json({email, token});
    }
    catch(e){
        console.log(e.message);
        res.status(400).json({message: e.message});
    }
}

module.exports = {loginUser, signUpUser}