const {addUser} = require("../models/users.js")



const register = async (req,res) => {
    await addUser(req.body.name, req.body.email, req.body.password)
    res.send("New user has been added")
}

module.exports = register;