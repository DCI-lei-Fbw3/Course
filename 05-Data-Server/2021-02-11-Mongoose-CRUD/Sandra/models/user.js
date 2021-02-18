const mongoose = require("mongoose");


const userSchema = new mongoose.Schema ({
    username: {
        type: String, 
        required: true, 
        unique: true
    }, 
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    }
})


const Users = mongoose.connection.model("users", userSchema); 


function registerNewUser(username, email, password){
    return new Promise ((resolve, reject)=>{
        const newUser = new Users ({
            username, 
            email, 
            password
        })
        newUser.save()
        .then(result=> resolve())
        .catch(error => reject(error))
    })
}

module.exports = {
    registerNewUser
}