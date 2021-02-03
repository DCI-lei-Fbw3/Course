// load .env file from project root.
// IMPORTANT: always exclude this file from your repo via .gitignore!
// however, to set up the project properly you may want to provide a .env.sample
// which only contains the keys.
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

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
const accountsRouter = require("./routes/accounts");

// routes
app.post("/login", login);
app.use("/test", checkTokenInput, validateToken, accountsRouter());
app.use("/account", checkTokenInput, validateToken, bankingRouter());

app.listen(3000, () => {
    console.log("server listening on port 3000");
});
