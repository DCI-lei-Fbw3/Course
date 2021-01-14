const express = require("express");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const app = express();
const port = 3000;
// app.use(express.json());

const adapter = new FileSync("database.json");
const db = low(adapter);

let dataBasePosts = db.get("posts");
let dataBaseUsers = db.get("users");

app.get("/", (req, res) => {
	res.send("<h1>Express Server is running</h1>");
});

app.get("/posts", (req, res) => {
	res.status(200);
	res.json(dataBasePosts);
});

app.get("/users", (req, res) => {
	res.send(dataBaseUsers);
});

app.get("/posts/:id", (req, res) => {
	const posts = dataBasePosts.find({ id: parseInt(req.params.id) }).value();
	const comments = db.get("comments").find({ id: posts.id }).value();
	const author = db.get("users").find({ id: posts.userId }).value();
	res.send({
		post: { title: posts.title, body: posts.body },
		comments: { name: comments.name, body: comments.body },
		author: { name: author.name, email: author.email },
	});
});

app.listen(port, () =>
	console.log(`Server running on  http://localhost:${port}`)
);
