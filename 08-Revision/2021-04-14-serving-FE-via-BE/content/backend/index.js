const express = require("express");
const app = express();
const path = require("path");

app.listen(3456, () => console.log("server listening on port 3456"));

// REST API endpoints
// --------------------------------
app.get("/api/products", (req, res) => {
    res.json([
        {
            id: 1,
            name: "product 1",
        },
        {
            id: 2,
            name: "product 2",
        },
    ])
});

// fallback to respond with a 404 NOT FOUND error when no route under /api has been set
app.use("/api/*", (req, res) => res.status(404).send());
// --------------------------------


// Serving frontend
// --------------------------------
// we want to make sure that all static files from our build can be requested
// we use express.static and link it to the "app" directory
app.use(express.static(path.join(__dirname, "app")));
// since index.html is our entrypoint for the React app, we force this file to be sent
app.use((req, res) => res.sendFile(path.join(__dirname, "app", "index.html")));
// --------------------------------
