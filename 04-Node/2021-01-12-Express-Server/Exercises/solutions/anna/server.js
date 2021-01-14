// npm init -y
// npm install express nodemon lowdb

// import modules
const low = require("lowdb");
const express = require("express");
const FileAsync = require("lowdb/adapters/FileAsync");

// set port
const port = 3009;

// import data
const app = express();
const adapter = new FileAsync("./database.json");
// app.use(express.json()); // Not needed with "get" only

// Create database instance and start server
// Base code from "Server" section of the examples in lowdb docs

low(adapter) //Use lowdb to connect to database (in this case, external json file)
  .then((db) => {
    // Set up routes

    // GET /posts/
    app.get("/posts", (req, res) => {
      const posts = db.get("posts");
      res.send(posts);
    });

    // GET /posts/:id
    app.get("/post/:id", (req, res) => {
      const currentId = parseInt(req.params.id); // currentId = 4 (localhost:3009/post/4)
      const post = db.get("posts").find({ id: currentId }).value(); // {id: 4, post: blahblah, author: wahwah}

      const comment = db.get("comments").find({ postId: currentId }).value()
        .body;

      const authorId = post.userId;
      const authorInfo = db.get("users").find({ id: authorId }).value();
      const authorName = authorInfo.name;
      const authorEmail = authorInfo.email;

      const responseBody = {
        post: post,
        comment: comment,
        author: { name: authorName, email: authorEmail },
      };
      res.send(responseBody);
    });

    // GET /users/
    app.get("/users", (req, res) => {
      const users = db.get("users");
      res.send(users);
    });
  })
  .then(() => {
    app.listen(port, () => console.log("listening on port 3000"));
  });
