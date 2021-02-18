// tous ce qui concerne la connection et les differentes fonction

require("dotenv").config()
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt")
const express = require("express")
const mongoose = require("mongoose")
const {check,validationResult} = require("express-validator")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 3000


mongoose.connect(process.env.URI, {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("You are now connecting to your dataBase"))
.catch(err => console.log(err))

const schemaUser = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});


const Users = mongoose.connection.model("users",schemaUser) 


const schemaProducts = new mongoose.Schema({
    articleNo:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});


const ProductDb = mongoose.connection.model("products",schemaProducts)


module.exports = {Users,ProductDb}