const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./database/database.json");
const db = low(adapter);


const balance = (req, res) => {
    // extract token from body
    const token = req.body.token;

    // load user from database
    const user = db.get("users").find({ token }).value();

    // send balance to client
    res.json({ balance: user.balance });
};


module.exports = balance;
