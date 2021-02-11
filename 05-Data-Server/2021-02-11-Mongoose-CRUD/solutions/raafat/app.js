const express = require("express");
const router = require("./routes/router");
require("dotenv").config();
const app = express();

port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(port, () => console.log(`http://localhost:${port}`));
