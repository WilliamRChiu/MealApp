require('dotenv').config
const User=  require('../Schema/UserSchema');
const jwt = require('jsonwebtoken');

const createToken = (_id) =>{
    return jwt.sign({_id: _id}, process.env.SECRET, {expiresIn: '3d'});
}

