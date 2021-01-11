// import the built-in http module from Node.js
const http = require("http");

// define the request we are going to make:
// we need a hostname and a port to call the server in general
// with the path we define which resource we want
// and with the method we tell the server what we want to do with this resource
const httpOptions = {
    hostname: "cat-fact.herokuapp.com",
    port: 80,
    path: "/facts",
    method: "GET",
};

// create an http request with our options and handle the response in a callback function
// the response is a stream, so you might need to fetch all chunks that are being streamed
// before working with the whole response.
//
// in this example we just use process.stdout.write() to print all chunks.
const httpReq = http.request(httpOptions, res => {
    console.log(res.statusCode);
    res.on("data", data => process.stdout.write(data));
});

// stop the finished request
httpReq.end();
