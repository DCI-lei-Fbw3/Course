const path = require("path");
const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
	response.statusCode = 200;
	let keyboard = fs.readFileSync(path.join(__dirname, "keyboard.txt"));
	if (request.url === "/keyboard") {
		response.setHeader("Content-Type", "text/plain");
		response.end(keyboard);
	}
	if (request.url === "/blog") {
		response.setHeader("Content-Type", "text/html");
		response.end("<h1>This is my blog</h1>");
	} else {
		response.statusCode = 404;
		response.setHeader("Content-Type", "text/html");
		response.end(`<h1>This page is not here ${response.statusCode}</h1>`);
	}
});
const port = 5000;

server.listen(port, () => {
	console.log(`server is running on port ${port}`);
});
