// we want to use bcrypt now to generate the password hash
const bcrypt = require("bcrypt");

console.log("04 bcrypt");
console.log("=====================================================");

const password = "mysecretpassword";

// bcrypt hashes are salted as it automatically generates the salt for us
// the functions .hash() (asyncronous, returns a Promise) and .hashSync() (the synchronous version) take two parameters:
// the first one is the value we want to hash
// the second defines the "cost", so how often the hash shall be regenerated until we get a final result
// the higher the cost, the longer it takes to generate the hash
// this makes the whole process slow enough to make brute-force attacks ineffective
// by increasing the cost factor by 1 we double the time (it's 2^cost recalculations/rounds)
const hash = bcrypt.hashSync(password, 12);

// a bcrypt hash has several parts, separated by $:
console.log("ingredients and results:");
console.log({
    password,
    fullString: hash,
    algorithm: hash.substr(1, 2),
    cost: hash.substr(4, 2),
    salt: hash.substr(7, 22),
    hash: hash.substr(29, 31),
});
console.log("\r\n");



// since the bcrypted hash contains the salt already we do not have to store it separately
const user = {
    username: "myUsername",
    hash,
};

console.log("user as stored in database:");
console.log(user);
console.log("\r\n");



const passwordFromLoginForm = "mysecretpassword";

// instead of hashing the password and comparing the hashes manually we only need to use the function .compare() or .compareSync()
// it takes two parameters:
// the first one is the value we want to check. so this will be the password from the login form
// the second is the hash from the user
const valid = bcrypt.compareSync(passwordFromLoginForm, user.hash);


// see the result in the terminal
console.log("comparison:");
console.log({ valid });
console.log("\r\n\r\n\r\n");
