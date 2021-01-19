const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// controllers
const login = require("./controllers/login");

// middleware
const checkTokenInput = require("./middleware/checkTokenInput");
const validateToken = require("./middleware/validateToken");

// routers
// our routers just contain the function we need to call in app.use()
const bankingRouter = require("./routes/banking");

// routes
// here we set our endpoint POST /login directly by using app.post() and adding our controller
app.post("/login", login);

// instead of setting up the endpoints directly, we introduce the express router
// after the middlewares we call the router via bankingRouter() which then takes care of the path
// that comes after /account, e.g. /account/balance, /account/transfer
// by grouping our endpoints in one router, we do not have to add the middlewares to each one individually
app.use("/account", checkTokenInput, validateToken, bankingRouter());

app.listen(3000, () => {
    console.log("server listening on port 3000");
});
