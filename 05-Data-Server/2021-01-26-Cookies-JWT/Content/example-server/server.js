const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// we use the cookieParser as a global middleware so every requests will pass through this
app.use(cookieParser());
// after the cookieParser we have a new object in the request that contains the client's cookies
// see console.log(req.cookies) in your middleware or controller

const user = {
    username: "dominik",
    password: "secretpassword",
};

// this secret is used for signing and verifying the JWT. Do not share it with any client
const secret = "myspecialsecretkey";

// routes
app.post("/login", (req, res) => {
    if (!req.body.username || !req.body.password) {
        return res.status(401).send("please provide credentials");
    }

    if (req.body.username !== user.username || req.body.password !== user.password) {
        return res.status(401).send("you are not authorized");
    }

    // jwt.sign() workflow in a nutshell:
    // 1. base64encode header
    // 2. base64encode payload (1. parameter)
    // 3. create signature by combining header, payload and secret (2. parameter) and generate a hash
    // => return the three parts as one string: header.payload.signature

    // you can add an expiration time (in seconds) to the token in the third parameter, so it will be invalid after x seconds
    const token = jwt.sign({ username: user.username }, secret, { expiresIn: 120 });

    // add a cookie to the response. you can add more than one cookie by calling .cookie() for each value
    res.cookie("cookieToken", token, { httpOnly: true });
    res.send("logged in");
});

app.get("/account", (req, res) => {
    // extract the cookie from the object that cookieParser created: req.cookies
    const cookieToken = req.cookies.cookieToken;

    if (!cookieToken) {
        return res.status(401).send("not authorized");
    }

    // jwt.verify() decrypts the token using our secret
    // it also checks the token expiration time
    jwt.verify(cookieToken, secret, (error, payload) => {
        if (error) {
            console.log(error);
            return res.status(401).send("not authorized");
        }

        res.json(payload);
    });
});


app.listen(3000, () => {
    console.log("server listening on port 3000");
});
