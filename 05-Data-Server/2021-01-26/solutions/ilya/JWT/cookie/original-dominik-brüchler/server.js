const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

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
app.use("/account", checkTokenInput, validateToken, bankingRouter());

app.listen(3000, () => {
    console.log("server listening on port 3000");
});
