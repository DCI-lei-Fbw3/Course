/* external dependencies */
const express = require("express");
const bodyParser = require('body-parser');

/* application variables */
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || "7500";

/* routes */
const public = require("../routes/public");
app.use("/", public());

const authorized = require("../routes/authorized");
const validateToken = require("../middleware/vToken");
app.use("/authorized", validateToken, authorized());

// server activation
app.listen(port, () => console.log(`My express app is running on http://localhost:${port}`));




