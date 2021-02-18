const users = require("../models/user");

const registrNewUser = async(req, res) => { 
    res.status(200).json(await users.registrNewUser())
}

module.exports = {
    registrNewUser
}