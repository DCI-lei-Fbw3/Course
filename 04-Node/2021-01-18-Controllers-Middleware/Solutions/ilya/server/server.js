/* external dependencies */
const express = require("express");
const bodyParser = require('body-parser');


/* application variables */
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || "7500";
const db = require('../data/db');


/* controllers */
const login = require("../controllers/login");
const auth = require("../controllers/auth");
const transfer = require("../controllers/transfer");
const balanceShow = require("../controllers/balanceShow");
const balanceHide = require("../controllers/balanceHide");

/* validation */
const validateToken = (req, res, next) => {
    if (db.token === 'not generated yet') return res.redirect(401, 'login');
    next();
}

/* routes */
app.get("/", login);

app.get("/login", login);

app.post("/auth", auth);

app.post('/transfer', validateToken, transfer);

app.post("/balanceShow", validateToken, balanceShow);

app.post("/balanceHide", validateToken, balanceHide);


// server activation

app.listen(port, () => {

    console.log(`My express app is running on http://localhost:${port}`);

});




