const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.listen(4400, () => {
    console.log("server listening on port 4400");
});


const checkCredentials = (request, response, next) => {
    if (!request.body.email || !request.body.password) {
        return response.status(400).send("no credentials provided");
    }

    next();
};

app.post("/login", checkCredentials, (request, response) => {
    const expirationTime = 300;

    // this login function is a so called "stub"
    // it is a placeholder that can be changed to the actual implementation in the future
    // you can use functions and variables like these to keep the focus on your current task
    // without having to implement all the details
    // in this case we do not need to worry about database and token generation yet
    const login = (email, password) => {
        return "token";
    };

    const jwt = login(request.body.email, request.body.password);

    // this cookie will not be available in our frontend because of the "httpOnly" flag
    // we need to find another way in the frontend to check if we can still use this token
    response.cookie("authToken", jwt, { httpOnly: true, maxAge: expirationTime * 1000 });

    // one way could be to provide a new cookie with just the expiration time as a value
    // the problem here is: we have to use the same origin
    // this can work when your frontend is available under example.com and your api under example.com/api
    // only then the next line can be used
    // response.cookie("expirationTime", expirationTime, { maxAge: expirationTime * 1000 });
    response.status(204);
    response.send();
});


app.get("/products", (request, response) => {
    const products = [
        {
            "articleNo": "pc-0001",
            "name": "Dell PC 2021",
            "description": "super-fast and not-so-reliable machine that takes care of your daily dosis of crashes",
            "price": 899.99
        },
        {
            "articleNo": "hw-0002",
            "name": "Lenovo ThinkPad",
            "description": "high-end-business notebook for the power-user who does not need a working computer at all",
            "price": 1295.95
        },
        {
            "articleNo": "hw-0003",
            "name": "MacBook Pro",
            "description": "beautifully designed, pricey aluminum block. comes with an apple sticker for your car!",
            "price": 3299.95
        },
        {
            "articleNo": "hw-0004",
            "name": "HP Spectre Convertible",
            "description": "extremely performant notebook that converts to a bulky tablet for users with strong arms and huge hands",
            "price": 1800
        }
    ];

    response.json(products);
});
