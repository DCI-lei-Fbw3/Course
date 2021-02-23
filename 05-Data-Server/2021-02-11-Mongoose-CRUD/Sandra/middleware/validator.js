const jwt = require("jsonwebtoken"); 

const { body, validationResult } = require('express-validator');



// //1. Create POST request
// //2. Create "Checks" using express-validator middleware
// //3. Pass an error if validation fails
// app.post('/form', [
//     check('name').isLength({ min: 3 }),
//     check('email').isEmail(),
//     check('age').isNumeric()
// ], (req,res) =>{
//     //the validationResult method will return the errors thrown by our validation chain
//     const error  = validationResult(req)
//     if(!error.isEmpty()){
//         //IF validation fails, the server here responds with an object that has an array of error values representing the failed validation
//         return res.status(422).json({ error : error.array()})
//     }
//     //IF validation passes, store the req body to variables and do whatever our logic is supposed to do
//     const name = req.body.name
//     const email = req.body.email
//     const age = req.body.age

// }
// )

function validatorReg(){
    ([
        check('username').isLength({ min: 3 }),
        check('email').isEmail(),
        check('password').isLength({min: 6})
    ], (req,res) =>{
        const error  = validationResult(req)
            if(!error.isEmpty()){
                //IF validation fails, the server here responds with an object that has an array of error values representing the failed validation
                return res.status(422).json({ error : error.array()})
            }
            //IF validation passes, store the req body to variables and do whatever our logic is supposed to do
            const username = req.body.username
            const email = req.body.email
            const password = req.body.password
    }, next())
}

const validator = (req, res, next) => {
    //console.log(req.signedCookies)
    //console.log(req.cookies)
    if (!req.cookies || !req.cookies.cookieToken) {
        return res.status(500).send("Access denied! Token not found.")
    } 
    // the verify method takes three parameters: your cookie token and your secret and compares them, and the last parameter is a callback function that handles errors:
    jwt.verify(req.cookies.cookieToken, process.env.SECRET, (error, payload)=> {
        if (error) {
            return res.status(500).send("jwtoken doesn't match")
        } 
        next();
    })
}

module.exports = {
    validatorReg,
    validator
}; 