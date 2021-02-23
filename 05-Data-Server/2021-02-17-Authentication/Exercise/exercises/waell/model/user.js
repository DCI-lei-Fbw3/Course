const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');





const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail, 'invalid Email'],
        unique: true,
    },
});


userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 12);
    }
    next();
});
 
const User = mongoose.connection.model('users', userSchema);

// email checker midellware
/* 
function checkIfEmail(req,res,next){

    User.findOne(req.body.email).then(data =>{
    if(!data) res.status(403).send("this email is in use")
    else{
    next() 
    }
    }).catch(err => console.log(err))
    } 

*/

function addUser(username, password, email){
    return new Promise((resolve, reject) => {
        //let hashPassword = bcrypt.hashSync(password, 12);
        const newUser = new User({
            username, 
            password,//: hashPassword,
            email,
        })
        newUser.save()
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
};

const checkIfEmail = (email) => {
    return new Promise((res, rej)=>{
        User.findOne({email}).then(data =>{
            if(data) res("isEmail");
           else res("notEmail");
    })
    
        .catch(err => rej(err)) 
})}

function getUser(username) {
    return new Promise((resolve, reject) => {
        User.findOne({username})
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
};



module.exports = {
    addUser,
    getUser,
    checkIfEmail,
};
    