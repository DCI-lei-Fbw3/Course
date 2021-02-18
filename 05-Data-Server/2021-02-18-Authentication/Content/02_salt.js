const sha256 = require("crypto-js/sha256");

console.log("02 salt");
console.log("=====================================================");

const password = "mysecretpassword";

// instead of only hashing the password we append a random value to the password and store it in the user's document
// we call this additional value "salt"
// the salt is individual, so each user has its own salt
const salt = Math.random();
const hash = sha256(password + salt).toString();

console.log("ingredients and results:");
console.log({ password, hash, salt });
console.log("\r\n");

// we have to save the salt along with the user because we need it to hash the password again on login to compare the hashes
const user = {
    username: "myUsername",
    hash,
    salt,
};

console.log("user as stored in database:");
console.log(user);
console.log("\r\n");




const passwordFromLoginForm = "mysecretpassword";

// now we need to append the salt from the user we want to login to
const loginHash = sha256(passwordFromLoginForm + user.salt).toString();

const passwordIsCorrect = hash === loginHash;


// see the result in the terminal
console.log("comparison:");
console.log({ loginHash, checkHash: hash, passwordIsCorrect });
console.log("\r\n\r\n\r\n");
