// to make the passwords even more secure, we introduce a secret that is stored separately from the users
// this secret will then be added to the password like a salt
// we only use one secret for all users and keep this in our environment
// this secret is called "pepper"
require("dotenv").config();
const sha256 = require("crypto-js/sha256");

console.log("03 pepper");
console.log("=====================================================");

const password = "mysecretpassword";
const pepper = process.env.PEPPER;

const salt = Math.random();

// we just add the pepper to our hash recipe
const hash = sha256(password + salt + pepper).toString();

console.log("ingredients and results:");
console.log({ password, hash, salt, pepper });
console.log("\r\n");

// please keep in mind that we do not store the pepper in the user record. only the salt and the hash is in here
const user = {
    username: "myUsername",
    hash,
    salt,
};

console.log("user as stored in database:");
console.log(user);
console.log("\r\n");




const passwordFromLoginForm = "mysecretpassword";

// again, we need to make sure that the pepper is part of the string that is going to be hashed
const loginHash = sha256(passwordFromLoginForm + user.salt + pepper).toString();

const passwordIsCorrect = hash === loginHash;


// see the result in the terminal
console.log("comparison:");
console.log({ loginHash, checkHash: hash, passwordIsCorrect });
console.log("\r\n\r\n\r\n");
