const mongoose = require('mongoose');
const {isEmail} = require('validator');
const cookieParser = require('cookie-parser');
const { JsonWebTokenError } = require('jsonwebtoken');
const db = require('../model/user')
const jwt = require('jsonwebtoken');



async function checkEmail(req,res,next){
    try{
        let result = await db.checkIfEmail(req.body.email)
        if(result === "isEmail") {
            return res.status(401).send("not allowed");
        } else {
            next();
        }
    }
    catch{ (err) => console.log(err) }
}


function checkIfLoggedIn(req,res,next){

    if (!req.cookies.cookieToken) res.status(400).send("you are not logged in");
    jwt.verify(req.cookies.cookieToken, process.env.SECRET, (error, payload) => {
        if (error) {
            return res.status(400).send('you are not logged in')
        }
        next()
    });
};




module.exports = {
    checkEmail,
    checkIfLoggedIn,
};


