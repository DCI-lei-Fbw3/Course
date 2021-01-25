const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./database/database.json");
const db = low(adapter);


const transfer = (req, res) => {
    // extract token from body
    const token = req.body.token;
    const amount = req.body.amount;

    // check if amount is provided
    if (!amount) {
        return res.status(400).send("no amount to transfer provided.");
    }

    // transfer
    db.get("users").find({ token }).set("balance", +res.locals.user.balance + +amount).write();

    // send success status to client
    res.status(200).send("transfer succeded.");
};


module.exports = transfer;
