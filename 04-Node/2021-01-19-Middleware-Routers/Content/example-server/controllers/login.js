const sha256 = require("crypto-js/sha256");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./database/database.json");
const db = low(adapter);


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
    const token = sha256(`${Date.now()}-${iban}-${pin}`).toString();

    // send token to client
    res.json({ token });

    // store token in database
    db.get("users").find({ iban }).set("token", token).write();
};


module.exports = login;
