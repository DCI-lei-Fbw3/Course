const express = require("express");
const server = express();

// use a middleware to parse the body of a request
server.use(express.json());

const port = 3000;

// set up the paths the server will handle
server.get("/blog", (request, response) => {
    const responseBody = [{
        date: "2021-01-11",
        title: "My first HTTP Server",
        description: "This is a server powered by Express.js.",
        reading: ["https://expressjs.com/en/starter/hello-world.html", "https://www.postman.com"],
    }];

    // use functions introduced by express to create the response
    response.status(200);
    response.json(responseBody);
});

server.get("/keyboard", (request, response) => {
    const responseBody = [{
        title: "Keyboard",
    }];

    // use functions introduced by express to create the response
    response.status(200);
    response.json(responseBody);
});

server.post("/user", (request, response) => {
    // when method POST is used in a request, we can access request.body to access the data
    // (see line 5 where we set up the middleware for this)
    console.log(request.body);
    response.send(request.body.name);
});


// start listening to the port
server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});


// Basic Concept of Middlewares
// ----------------------------
// Our server acts as a facility with a conveyor belt. When a request comes in, it runs through the first middleware.
// This one then passes it to the next one until it reaches one of the Routers/Controllers. In this example these are just the
// functions server.get() and server.post() for our paths.
// Each middleware can do all sorts of things, e.g. checking if the client is allowed to access certain resources.
// Eventually the get delivered back to the client.
//
//
//   Request ->  Middleware 1  -> Middleware 2 ->    ...  -> Router/Controller -> Response
//
//                \      /         \      /                      \      /           _______
//      ?         |______|         |_[=]__|         ...          |§%?=&!|          |  res  |
//     req    o===============o o==============o o========o o================o     |_______|
//                           next()           next()     next()
