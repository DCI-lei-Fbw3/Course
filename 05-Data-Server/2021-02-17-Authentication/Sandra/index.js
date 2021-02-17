const sha256 = require("crypto-js/sha256");

const password = "mypassword"
const salt = Math.random()
const hash = sha256(password + salt).toString(); 

console.log(hash)