const express = require("express")
var {pusher} = require("./pushData")
const app = express()
const port = process.env.PORT || 5000


app.get("/createMembers", pusher, (req,res) =>{
    res.send("Data added");
})




app.listen(port, () => {
    console.log(`Server is runing on port ${port}`)
})