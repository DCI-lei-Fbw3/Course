// source:
// https://expressjs.com/en/resources/middleware/cors.html

var express = require('express')
var cors = require('cors')
var app = express()

const port = 4000;
app.listen(port, function () {
	console.log('CORS-enabled web server listening on port', port)
})

//app.use(cors()) // enable cors globally

app.get('/api/user', cors(), getUser)

function getUser(req, res, next) {
	res.json( { id: 1, name: "alice" } );
	next();
}


app.get('/api/user_delayed', cors(), getUserDelayed)

function getUserDelayed(req, res, next) {
	setTimeout(
		() => {  // the closure behaviour allows access to "res" in this case
			res.json( { id: 1, name: "alice" } );
			next();
		}, 3000);
}
