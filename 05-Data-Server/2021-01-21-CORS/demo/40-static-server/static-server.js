// source:
// https://expressjs.com/en/resources/middleware/cors.html

// a webserver for static files

var express = require('express')
var cors = require('cors')
var app = express()

const port = 4000;

app.use("/", express.static('public')) // serving files from the static subdirectory

app.use('/test', (req, res) => res.send("test") )

app.listen(port, function () {
  console.log('CORS-enabled web server listening on port', port)
})
