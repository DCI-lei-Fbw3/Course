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

// define which office door to open
// => set the port on which the server will listen to requests
const port = 3000;

// structure the office and give orders to the staff
// => define how the requests will be handled and create the response
const server = http.createServer((request, response) => {
    if (request.method === "GET" && request.url === "/blog") {
        response.statusCode = 200; // tell the client that his request was fine and the server responded accordingly
        response.setHeader("Content-Type", "application/json"); // tell the client what the response is

        const responseBody = [{
            date: "2021-01-11",
            title: "My first HTTP Server",
            description: "This is a simple HTTP server powered by built-in Node.js http module.",
            reading: ["https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/", "https://nodejs.org/api/http.html", "https://www.postman.com"],
        }];
        console.log("something")
        response.write(JSON.stringify(responseBody)); // send the response to the client
        response.end(); // close the connection to the client. in the office: say "goodbye"
    }
});

// open the office door and start the business
// => start listening to requests on the port
server.listen(port, error => {
    if (error) console.log(error);

    console.log("server is running");
});
