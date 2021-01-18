const express = require("express"); 
const bodyParser = require("body-parser"); 
const app = express(); 
app.use(bodyParser.urlencoded({extended:true}));
const port = process.env.PORT || "3001"; 
const login = require("./controllers/login")
const transfer = require("./controllers/transfer")
const balance = require("./controllers/balance")
const withdraw = require("./controllers/withdraw")


app.post("/login", login)

app.post("/transfer", transfer)

app.post("/balance", balance)

app.post("/withdraw", withdraw)

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})
