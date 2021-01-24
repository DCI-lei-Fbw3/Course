const express = require("express"); 
const bodyParser = require("body-parser"); 
const app = express(); 
app.use(bodyParser.urlencoded({extended:true}));
const port = process.env.PORT || "4000"; 
const cors = require("cors"); 

app.use(cors())

app.get("/name", (req, res) => {
    res.status(200).json({name1: "Sandra", name: "Karl"})
})

app.get("/douche", (req, res) => {
    res.status(200).json({name1: "Bekh", name: "Lew"})
})


app.listen(port, () => {
    console.log(`Server running on ${port}`)
})
