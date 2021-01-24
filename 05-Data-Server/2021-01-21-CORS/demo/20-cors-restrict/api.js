// source:
// https://expressjs.com/en/resources/middleware/cors.html

var express = require('express')
var cors = require('cors')
var app = express()

const port = 4000;
app.listen(port, function () {
	console.log('CORS-enabled web server listening on port', port)
  })

var corsOptions = {
	//methods: "GET,HEAD", //defaults to "GET,HEAD,PUT,PATCH,POST,DELETE"
	origin: 'http://localhost:3000', // only requests from webpages from that server
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


//app.use(cors(corsOptions)) // enable cors globally

//                   enable CORS for this route
app.get('/api/user', cors(corsOptions), function (req, res, next) {
	res.json( { id: 1, name: "alice" } );
	next();
})
  