const express = require("express");
const path = require("path");

let port = 5000;
const app = express();

// app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) =>
	res.status(200).sendFile(path.join(__dirname, "public/index.html"))
);
app.get("/message", (req, res) =>
	res.status(200).sendFile(path.join(__dirname, "public/message.html"))
);
app.get("/about", (req, res) =>
	res.status(200).sendFile(path.join(__dirname, "public/about.html"))
);

// app.get("/about", (req, res) =>
// 	res.status(200).send(`<h1>Hello in the About page</h1>`)
// );

// app.get("/message", (req, res) =>
// 	res.status(200).send(`<h1>Live free or Die hard</h1>`)
// );

app.listen(port, () =>
	console.log(`Server running on host: http://localhost:${port}`)
);
