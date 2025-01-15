const jwt = require('jsonwebtoken');
const User  = require('../Schema/UserSchema');

const AuthenticationChecker = async(req,res,next)=>{
    const { authorization } = req.headers

    if (!authorization){
        return res.status(401).json({error:"Include the token within the authorization field"});
    }

    const token = authorization.split(' ')[1];
    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(decoded._id).select('_id');
        if(!user){
            throw Error("Request not authorized");
        }
        req.user = user;
        next();
    }
    catch(e){
        console.log(e.message);
        res.status(401).json({error:e.message})
    }
}
module.exports = AuthenticationChecker