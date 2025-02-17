require('dotenv').config();
const User=  require('../Schema/UserSchema');
const jwt = require('jsonwebtoken');
const validator = require('validator')

const createToken = (_id) =>{
    return jwt.sign({_id: _id}, process.env.SECRET_KEY, {expiresIn: '3d'});
}

const signUpUser = async(req,res)=>{
    let EmptyField = []
    const {email, password, confirmPassword} = req.body
    try{
    if(!email||!password){
        if(!email){
            EmptyField.push('email');
        }
        else{
            EmptyField.push('password');
        }
        throw Error("Fill in all fields")
    }
    if(!confirmPassword){
        EmptyField.push('confirmPassword')
        throw Error("Fill in all fields")
    }
    if(password!=confirmPassword){
        throw Error("Passwords Do Not Match");
    }
    if (!validator.isEmail(email)){
        throw Error("Email is not valid");
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Password is not Strong Enough");
    }
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
        res.status(400).json({error: e.message, EmptyField: EmptyField});
    }
}

const loginUser = async(req,res)=>{
    const {email, password} = req.body
    let EmptyField = []
    try{
        if(!email){
            EmptyField.push('email')
        }
        else if(!password){
            EmptyField.push('password')
        }
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.status(200).json({email, token});
    }
    catch(e){
        console.log(e.message);
        if(EmptyField.length){
            res.status(400).json({error: e.message, EmptyField: EmptyField});
        }
        else{
            res.status(400).json({error: e.message})
        }
    }
}

module.exports = {loginUser, signUpUser}