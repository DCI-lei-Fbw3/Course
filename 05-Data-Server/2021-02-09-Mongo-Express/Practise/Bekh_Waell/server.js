const express = require("express")
var {pusher, added} = require("./pushData")
const app = express()
const port = process.env.PORT || 5000


app.get("/createMembers", pusher, (req,res) =>{
    res.send("Data added");
})

app.get("/addMember", added, (req, res ) => {
    res.send("Luis Added")
})


app.listen(port, () => {
    console.log(`Server is runing on port ${port}`)
})