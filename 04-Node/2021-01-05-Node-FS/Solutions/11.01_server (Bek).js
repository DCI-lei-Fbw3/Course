const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req,res) => {
    
    if ( req.method === "GET" && req.url === "/keyboard"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        fs.readFile("/home/dci/thomas/Intro/keyboard.txt","utf8", (err,data) => {
            if (err) throw err;
            console.log(data)
            res.write(data);
            res.end();
        })
    } else if (req.method === "GET" && req.url === "/blog") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        const responseBody = [{
            date: "2021-01-11",
            title: "My first HTTP Server",
            description: "This is a simple HTTP server powered by built-in Node.js http module.",
            reading: ["https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/", "https://nodejs.org/api/http.html", "https://www.postman.com"],
        }];
        res.write(JSON.stringify(responseBody)); 
        res.end();
    }   
});

server.listen(port, error => {
    if (error) console.log(error);
    console.log("server is running")
});