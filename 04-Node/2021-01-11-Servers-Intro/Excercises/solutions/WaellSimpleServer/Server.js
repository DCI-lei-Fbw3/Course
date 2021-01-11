const http = require("http");

const port = 4000;

const server = http.createServer((request, response) => {
    if (request.method === "GET" && request.url === "/keyboard") {
        response.statusCode = 200; 
        response.setHeader("Content-Type", "application/json");
        const fs = require("fs");
        fs.readFile("./keyboard.txt","utf8", (err,data) => {
            if (err) throw err;
            console.log(data);
            response.write(data);
            response.end();
        })
    }
});

server.listen(port, error => {
    if (error) console.log(error);

    console.log("server is running");
});
