const { Schema} = require('mongoose')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const User = new Schema({
    email:{
        required: true,
        type: String,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        select: false,
        minLength: [6, "Please ensure your password is more than 6 characters"], 
    },
});

User.pre('save', async function (next) {
    if(!this.isModified('password')){
        return next();
    }
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }
    catch(e){
        next(e);
    }
})

User.methods.matchPassword = async function (enteredPassword){
    const match = await bcrypt.compare(enteredPassword, this.password);
    return match;
}


User.statics.login = async function(email, password){
    if(!email || !password){
        throw Error("Please fill in all fields");
    }
    const user = await this.findOne({email}).select('+password');
    if(!user){
        throw new Error('Invalid email or password');
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
        throw new Error('Invalid email or password');
      }
    
    return user;
}


module.exports = mongoose.model('User', User);

