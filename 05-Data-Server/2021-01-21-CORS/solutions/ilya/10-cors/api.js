// source:
// https://expressjs.com/en/resources/middleware/cors.html

var express = require('express')
var cors = require('cors')
var app = express()

const port = 4000;

//app.use(cors()) // enable cors globally

//                   enable CORS for this route
app.get('/api/user', function (req, res, next) {
	res.json( { id: 1, name: "alice" } );
	next();
})

app.listen(port, function () {
  console.log(`http://localhost:${port}/api/user`);
})
