const mongoose = require('mongoose');
const {isEmail} = require('validator');
const cookieParser = require('cookie-parser');
const { JsonWebTokenError } = require('jsonwebtoken');
const { checkIfEmail } = require('../model/user')
const jwt = require('jsonwebtoken');



async function checkEmail(req,res,next){
    try{
        await checkIfEmail(req.body.email)
        //res.status(201).send(data)
        next() 
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


