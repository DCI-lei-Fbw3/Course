const bcrypt = require("bcrypt"); 

const password = "mypassword"; 
const username = "username"

const hash = bcrypt.hashSync(password, 10); 

const user = {
    username,
    hash,
}

console.log(user)

const passwordFromBody = "mypassword"; 
const valid = bcrypt.compareSync(passwordFromBody, hash); 
console.log({valid}); 