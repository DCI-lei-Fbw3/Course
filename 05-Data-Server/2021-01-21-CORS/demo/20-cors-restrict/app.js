// source:
// https://expressjs.com/en/resources/middleware/cors.html

// a webserver for static files

var express = require('express')
var cors = require('cors')
var app = express()

const port = 3000;

app.use(cors()) // enable cors globally

app.use('/', express.static('static')) // serving files from the static subdirectory

app.listen(port, function () {
  console.log('CORS-enabled web server listening on port', port)
})
