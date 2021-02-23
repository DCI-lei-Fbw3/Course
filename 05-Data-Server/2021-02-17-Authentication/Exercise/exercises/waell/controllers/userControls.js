const userControllers = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const addUser = async (req, res) => {
    let { username, password, email } = req.body;
    await userControllers.addUser(username, password, email)
    res.status(200).send('Registration done')
};

const getUser = async (req, res) => {
    const BodyPassword = req.body.password;
    const bodyName = req.body.username;
    const user = await userControllers.getUser(bodyName)
    const jwtToken = jwt.sign(bodyName, process.env.SECRET)
    if (!user) return res.status(400).send('invalid username or password')
    //console.log({user, BodyPassword})
    const valid = bcrypt.compareSync(BodyPassword, user.password);
    //console.log({valid})
    if (!valid) {return res.status(400).send('invalid username or password')};
    res.cookie('cookieToken', jwtToken, {httpOnly: true});
    res.status(200).json(user);
};

const logoutUser = (req,res) => {
    res.clearCookie("cookieToken")
    res.send("you logged out")
}

module.exports = {
    addUser,
    getUser,
    logoutUser,
}