const log = console.log;
require('dotenv').config({ path: __dirname + '/env/.env' });
/* connect to db */
require('./lib/database').connect();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* routing */
const products = require('./routes/products');
app.use(products());

/* start app */
app.listen(port, () => log(`Server is running: http://localhost:${port}`));



