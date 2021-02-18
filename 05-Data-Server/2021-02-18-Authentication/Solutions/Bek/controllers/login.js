const {login} = require("../models/users.js")
const jwt = require("jsonwebtoken")

const logIn = async (req,res) => {
    if (await login(req.body.name, req.body.password)) {
        const jwToken = jwt.sign({name :req.body.name},process.env.SECRET)
        res.cookie("cookieJwToken", jwToken, {httpOnly: true})
        res.send("loged in") 
        } else {
                res.send("user or pass not exist")
            }
};

module.exports = logIn;