const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./database/database.json");
const db = low(adapter);


app.use(bodyParser.urlencoded({ extended: true }));

// import our login controller
const login = require("./controllers/login");


// these are our callback functions we use in app.post();
// we want to move them to their own files in ./controllers
const transfer = (req, res) => {
    // extract token from body
    const token = req.body.token;
    const amount = req.body.amount;


    // check if token is provided
    if (!token) {
        return res.status(401).send("not authorized. please provide a valid token.");
    }

    // check if amount is provided
    if (!amount) {
        return res.status(400).send("no amount to transfer provided.");
    }

    // load user from database
    const user = db.get("users").find({ token }).value();

    // check if user exists
    if (!user) {
        return res.status(401).send("not authorized. please log in first.");
    }

    // transfer
    db.get("users").find({ token }).set("balance", +user.balance + +amount).write();

    // send success status to client
    res.status(200).send("transfer succeded.");
}



const withdraw = (req, res) => {
    // extract token from body
    const token = req.body.token;
    const amount = req.body.amount;

    // check if token is provided
    if (!token) {
        return res.status(401).send("not authorized. please provide a valid token.");
    }

    // check if amount is provided
    if (!amount) {
        return res.status(400).send("no amount to transfer provided.");
    }

    // load user from database
    const user = db.get("users").find({ token }).value();

    // check if user exists
    if (!user) {
        return res.status(401).send("not authorized. please log in first.");
    }

    // withdraw
    db.get("users").find({ token }).set("balance", +user.balance - +amount).write();

    // send success status to client
    res.status(200).send("withdrawal succeded.");
};



const balance = (req, res) => {
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

    // send balance to client
    res.json({ balance: user.balance });
};


// here we define the routes. note the second parameter which is our controller now
app.post("/login", login);
app.post("/transfer", transfer);
app.post("/withdraw", withdraw);
app.post("/balance", balance);


app.listen(3000, () => {
    console.log("server listening on port 3000");
});
