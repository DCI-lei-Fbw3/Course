const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./database/database.json");
const db = low(adapter);

const jwt = require("jsonwebtoken");


const validateToken = (req, res, next) => {
    // load user from database
    const secret = "wereti9j04e5tzh98rwhf49efe";
    const payload = jwt.verify(res.locals.token, secret);

    const user = db.get("users").find({ userId: payload.userId }).value();

    // check if user exists
    if (!user) {
        return res.status(401).send("not authorized. please log in first.");
    }

    res.locals.user = user;

    next();
};


module.exports = validateToken;
