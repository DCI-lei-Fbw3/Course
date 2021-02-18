// in this example we use the hash algorithm SHA256
const sha256 = require("crypto-js/sha256");

console.log("01 hash");
console.log("=====================================================");

const password = "mysecretpassword";

// when a user registers, we generate a hash with the SHA256 algorithm
// this process generates a string that can not be decrypted to restore the password
// it is like a one-way function
const hash = sha256(password).toString();

console.log("ingredients and results:");
console.log({ password, hash });
console.log("\r\n");

// the hash can then be stored in the database instead of the password itself
// so when someone has access to the database they are not able to see the password

// just for demonstration purposes: this "user" constant represents a document in the database
const user = {
    username: "myUsername",
    hash,
};

console.log("user as stored in database:");
console.log(user);
console.log("\r\n");




const passwordFromLoginForm = "mysecretpassword";

// when logging in, to check if the password is correct we generate a hash from the provided password...
const loginHash = sha256(passwordFromLoginForm).toString();

// ...and compare it with the hash that is stored in the database for this user (we identify the user by username)
const passwordIsCorrect = hash === loginHash;


// see the result in the terminal
console.log("comparison:");
console.log({ loginHash, checkHash: hash, passwordIsCorrect });
console.log("\r\n\r\n\r\n");
