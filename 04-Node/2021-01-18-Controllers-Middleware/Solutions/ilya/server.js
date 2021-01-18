/* external dependencies */
const express = require("express");
const bodyParser = require('body-parser');


/* application variables */
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || "7500";


/* controllers */
const main = require("./controllers/main.js");
const login = require("./controllers/login.js");
const transfer = require("./controllers/transfer.js");
const balanceShow = require("./controllers/balanceShow.js");
const balanceHide = require("./controllers/balanceHide.js");

/* routes */
app.get("/", main);

app.post("/login", login);

app.post('/transfer', transfer);

app.post("/balanceShow", balanceShow);

app.post("/balanceHide", balanceHide);


// server activation

app.listen(port, () => {

    console.log(`My express app is running on http://localhost:${port}`);

});

/* use cases middleware: 
        - token exists
        - multiple can be used: checkToken, validateInput...
    example:
    app.post('/transfer', checkToken, validateInput, transfer);
*/




