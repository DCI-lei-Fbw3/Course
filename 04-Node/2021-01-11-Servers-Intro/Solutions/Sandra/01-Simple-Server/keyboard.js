/*
Think about a server like an office building where the building itself is the hardware server,
the offices are the software servers and the office doors are the ports.
Since we do not talk about the hardware stuff, we will call the "software server" just "server" to make it easier.

Each office (server) is accessible via its own doors (ports). You can define which ports should be open for that. There are several predefined, "well known ports" like 80 for HTTP or 443 for HTTPS.
See: https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers
*/


// consult the interior designer for the office
// => import the neccessary built-in node module
const http = require("http");
 const fs = require("fs")
// define which office door to open
// => set the port on which the server will listen to requests
const port = 3001;

// structure the office and give orders to the staff
// => define how the requests will be handled and create the response
const server = http.createServer((request, response) => {
    if (request.method === "GET" && request.url === "/keyboard") {
        response.statusCode = 200; // tell the client that his request was fine and the server responded accordingly
        response.setHeader("Content-Type", "application/json"); // tell the client what the response is

       
        fs.readFile("./keyboard.txt", "utf8", function(err, data) {
            if (err) throw err;
            console.log(data);
            response.write(data)
            response.end(); 
        })
    // send the response to the client
    // close the connection to the client. in the office: say "goodbye"
    }
});

// open the office door and start the business
// => start listening to requests on the port
server.listen(port, error => {
    if (error) console.log(error);

    console.log("server is running");
});