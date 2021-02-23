const mongoose = require("mongoose");
const bcrypt = require("bcrypt");




const userSchema = new mongoose.Schema ({
    username: {
        type: String, 
        required: true, 
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
            password: bcrypt.hashSync(password, 12),
        })
        newUser.save()
        .then(result=> resolve())
        .catch(error => reject(error))
    })
}

async function loginUser (bodyUsername, bodyPassword) { 
    const user = await Users.findOne({username: bodyUsername}) // if it doesn't exist it will return an empty object anyway 
    //console.log(user)
        if (!user) {
        return false 
         }; 
        if (!bcrypt.compareSync(bodyPassword, user.password)) {
           return false
        } else return true
}


module.exports = {
    registerNewUser, 
    loginUser
}