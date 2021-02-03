// load .env file from project root.
// IMPORTANT: always exclude this file from your repo via .gitignore!
// however, to set up the project properly you may want to provide a .env.sample
// which only contains the keys.
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

// bad idea to store password in variable directly!
// const apiKey = "desr5t6ztre45rz";

// we require the database file to call the connection in there
// this way we make sure that the mongoose module sets up a connection which
// will be available in every file we require mongoose in
require("./lib/database");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

// controllers
const login = require("./controllers/login");

// middleware
const checkTokenInput = require("./middleware/checkTokenInput");
const validateToken = require("./middleware/validateToken");

// routers
const bankingRouter = require("./routes/banking");

// routes
app.post("/login", login);
app.use("/", /* checkTokenInput, validateToken, */ bankingRouter());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
