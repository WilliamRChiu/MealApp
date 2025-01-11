//implement dotenv
require('dotenv').config();

//install packages
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = process.env.PORT

//Install Files (i.e. Routes, Schema, Etc)
const Meals = require('./Router/MealsRouter')
const User = require('./Router/UserRouter')

//initialize app
const app = express()

//initialize ability to read forms
app.use(express.json())

//initialize CORS to connect to frontend.  Host Frontend on port 3000
app.use(cors({origin:'http://localhost:3000'}))

//initialize connection of app to mongoDB database
mongoose.connect(process.env.MONGO_URI).then(
    ()=>{
        app.listen(PORT,()=>{
            console.log("DATABASE CONNECTED! Listening on: http://localhost:"+PORT);
        });
    }
).catch((e)=>{
    console.log("ERROR CONNECTING TO DATABASE: "+ e);
})

//console log command for all CRUD actions
app.use((req,res,next)=>{
    console.log(req.body, req.method);
    next();
});
app.get('/',(req,res)=>{
    res.json({message:"Welcome to the app"});
});

//Establishing Routes
app.use('/api/Meal',Meals);
app.use('/api/user', User);