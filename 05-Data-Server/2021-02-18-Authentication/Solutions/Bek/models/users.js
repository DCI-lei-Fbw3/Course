require("dotenv").config();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    
});

const Users = mongoose.connection.model("users", userSchema)

function addUser(bodyName,bodyEmail,bodyPass) {
    return new Promise((resolve,reject) => {
        const newUser = new Users({
            name: bodyName,
            email:bodyEmail,
            password: bcrypt.hashSync(bodyPass,12)
        })
        newUser.save()
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
}

async function login(bodyName,bodyPass) {
    const user = await Users.findOne({name : bodyName})
    if (bcrypt.compareSync(bodyPass.toString(), user.password)) {
        return true
    }else {
        console.log("user or pass not exist")
        return false
    }
}


// const secret = "1237uaeawe12312asd"
// const jwToken = jwt.sign({name : bodyName},secret)
// cookie("cookieJwToken", jwToken, {httpOnly: true, maxAge: 120000})

module.exports = {
    addUser, 
    login
};