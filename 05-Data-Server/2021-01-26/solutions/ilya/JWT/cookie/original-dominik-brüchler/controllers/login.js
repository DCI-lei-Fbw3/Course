const sha256 = require("crypto-js/sha256");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./database/database.json");
const db = low(adapter);

const jwt = require("jsonwebtoken");


const login = (req, res) => {
    // extract credentials from body
    const iban = req.body.iban;
    const pin = req.body.pin;

    // check credentials
    if (!iban || !pin) {
        return res.status(400).send("no credentials provided.");
    }

    // load user from database
    const user = db.get("users").find({ iban }).value();

    // check credentials
    if (iban !== user.iban || +pin !== user.pin) {
        return res.status(401).send("not authorized.");
    }

    // generate token
    // to sign the token we use a secret that only the server knows
    const secret = "wereti9j04e5tzh98rwhf49efe";

    // we encrypt our payload which contains data to identify the user with the secret
    const token = jwt.sign({
        userId: 1,
    },
    secret);

    // the token has the following structure:
    // header.payload.signature

    // the header contains information about the jwt itself, e.g. the encryption algorithm
    // the payload contains our data we want to share with the client
    // the signature is the encrypted header and payload


    // send token to client as cookie.
    // set attribute "httpOnly" to true to prevent scripts from accessing the cookie.
    // we can call res.cookie() in every middleware or controller along the way, so there is
    // no need to call .status() and send back the result immediately with .send().
    res.cookie("token", token, { httpOnly: true });
    res.status(204);
    res.send();
};


module.exports = login;
