//implement dotenv
require('dotenv').config();

//install packages
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = process.env.PORT

//initialize app
const app = express()

//initialize ability to read forms
app.use(express.json())

//initialize CORS to connect to frontend.  Host Frontend on port 5000
app.use(cors({origin:'http://localhost:5000'}))

//initialize connection of app to mongoDB database
mongoose.connect(process.env.MONGO_URI).then(
    ()=>{
        app.listen(PORT,()=>{
            console.log("DATBASE CONNECTED! Listening on: http://localhost:"+PORT);
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
