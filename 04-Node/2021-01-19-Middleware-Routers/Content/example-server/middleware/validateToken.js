const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./database/database.json");
const db = low(adapter);


const validateToken = (req, res, next) => {
    // extract token from body
    const token = req.body.token;

    // check if token is provided
    if (!token) {
        return res.status(401).send("not authorized. please provide a valid token.");
    }

    // load user from database
    const user = db.get("users").find({ token }).value();

    // check if user exists
    if (!user) {
        return res.status(401).send("not authorized. please log in first.");
    }

    res.locals.user = user;

    next();
};


module.exports = validateToken;
