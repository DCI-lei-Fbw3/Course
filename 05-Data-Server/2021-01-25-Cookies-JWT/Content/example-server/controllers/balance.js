const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./database/database.json");
const db = low(adapter);


const balance = (req, res) => {
    // send balance to client
    res.json({ balance: res.locals.user.balance });
};


module.exports = balance;
