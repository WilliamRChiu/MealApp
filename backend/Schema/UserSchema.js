const { Schema} = require('mongoose')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = new Schema({
    email:{
        required: true,
        type: String,
        unique: true,
        minLength: 5,
        trim: true
    },
    password:{
        type: String,
        required: true,
        minLength: [6, "Please ensure your password is more than 6 characters"], 
    }
});

User.pre('save', async function (next) {
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

User.statics.matchPassword = async function (enteredPassword){
    const match = await bcrypt.compare(enteredPassword, this.password);
    return match;
}

User.statics.findByCredentials = async function(email, password){
    if(!email || !password){
        res.status(400).json({message: "Please fill in all fields"});
    }
    const user = await this.find({email});
    if(!user){
        user
    }
}


module.exports = mongoose.model('User', User);

