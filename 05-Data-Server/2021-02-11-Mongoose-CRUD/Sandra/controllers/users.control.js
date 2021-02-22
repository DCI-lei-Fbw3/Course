const users = require("../models/user");

const registerNewUser = async(req, res) => { 
    await users.registerNewUser(req.body.username, req.body.email, req.body.password)
    res.status(200).send("Successful registration")
}


module.exports = registerNewUser

