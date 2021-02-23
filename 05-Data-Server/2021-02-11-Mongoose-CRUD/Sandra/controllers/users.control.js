const users = require("../models/user");
const jwt = require("jsonwebtoken");

const registerNewUser = async(req, res) => { 
    await users.registerNewUser(req.body.username, req.body.email, req.body.password)
    res.status(200).send("Successful registration")
}

const loginUser = async(req, res) => {
    if  (await users.loginUser(req.body.username, req.body.password)){
            // here we create a new jwtoken after the user has logged in successfully, using the method sign:
            const jwToken = jwt.sign(req.body.username, process.env.SECRET);
            //we are creating a cookie where we will pass the created jwtoken:
            res.cookie("cookieToken", jwToken, {httpOnly: true, secure: false});
            res.status(200).send("Successful login")
    } else {res.status(400).send("Incorrect credentials.")} 
}

module.exports = {
    registerNewUser,
    loginUser
}

