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

// userModel.findOne(req.body.email).then(data =>{
// if(!data) res.status(403).send("this email is in use")
// else{
// next() 
// }
// }).catch(err => console.log(err))
// } 


// Users.findOne(req.body.email).then(data =>{
// if(!data) res.status(403).send("this email is in use")
// else{
// //copy paste your code hier 
// }
// }).catch(err => console.log(err)) 
// userSchema.pre('save', async function (next) {
// const user = this;
// if (user.isModified('password')) {
// user.password = await bcrypt.hash(user.password, 12);
// }
// next();
// }); 

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

function loginUser (bodyUsername, bodyPassword) { 
    return new Promise ((resolve, reject) => {
        const result =  Users.findOne({username: bodyUsername}) //whenever i use methods like find, delete etc, it returns the whole object containing all properties
        .then(result => resolve(result)) // here the result is the whole user object
        .catch(error => reject(error))       
    })
}


module.exports = {
    registerNewUser
}