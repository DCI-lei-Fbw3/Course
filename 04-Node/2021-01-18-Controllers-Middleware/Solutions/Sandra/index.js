require('dotenv').config(); 

const express = require("express"); 
const bodyParser = require("body-parser"); 
const cookieParser = require('cookie-parser')
const app = express(); 

require('./lib/database')

app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.json());

const port = process.env.PORT || "3001"; 

const login = require("./controllers/login")
const transfer = require("./controllers/transfer")
const balance = require("./controllers/balance")
const withdraw = require("./controllers/withdraw")
const tokenExists = require('./Middleware/tokenExists');
const validateToken = require('./Middleware/validateToken')


app.post("/login", login)

app.post("/transfer", tokenExists, validateToken, transfer)

app.post("/balance", tokenExists, validateToken, balance)

app.post("/withdraw", tokenExists, validateToken, withdraw)

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})
