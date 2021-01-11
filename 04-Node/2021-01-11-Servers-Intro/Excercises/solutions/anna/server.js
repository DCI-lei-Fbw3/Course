const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 3010;
const currentPath = path.dirname(__filename);

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.statusCode = 200;

    let responseBody;
    switch (req.url) {
      case "/":
        res.setHeader("Content-Type", "text/html");
        responseBody = fs.readFileSync(`${currentPath}/index.html`, "utf-8");
        break;
      case "/blog":
        res.setHeader("Content-Type", "text/plain");
        responseBody = "Welcome to my blog!";
        break;
      case "/keyboard":
        res.setHeader("Content-Type", "text/plain");
        responseBody = fs.readFileSync(`${currentPath}/keyboard.txt`, "utf-8");
        break;
      default:
        res.statusCode = 404;
        res.statusMessage = "Page not found";
        responseBody = `${res.statusCode}: ${res.statusMessage}`;
    }

    res.write(responseBody);
    res.end();
  }
});

server.listen(port, (error) => {
  if (error) throw error;
  console.log("Keyboard server running...");
});
