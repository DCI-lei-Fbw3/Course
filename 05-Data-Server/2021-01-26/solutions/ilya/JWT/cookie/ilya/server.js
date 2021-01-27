// Require libraries
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const checkCookieToken = require('./checkCookieToken');

const log = console.log;

const app = express();

const secret = 'secret1234567';

app.use(cors(), express.json(), cookieParser());

// database
const users = [
    {
        id: 1,
        name: 'Jack',
        isAdmin: true
    },
    {
        id: 2,
        name: 'John',
        isAdmin: false
    },
    {
        id: 3,
        name: 'Bob',
        isAdmin: false
    }
]


/* ROUTES */
/* 
catch all reqs, move to bottom otherwise further routes = unreachable 
app.get('/*', (req, res) => {
    */
app.get('/', (req, res) => {
    res.status(200).send('Welcome ! :)');
})

/* test route, no acess from frontend, just go to localhost:3000/setcookie, everything works as expected */
app.get('/setcookie', (req, res) => {
    res.cookie('name', 'ben');
    res.status(200).send('Just set a cookie !:)');
})

app.post('/login', (req, res) => {

    log(req.body);
    const { name } = req.body;
    const findUser = users.find(user => user.name === name);
    if (findUser) {
        /*      const token = jwt.sign(findUser, secret); */
        const token = 'hello';
        log('TOKEN:', token);
        res.cookie('token', token);
        res.status(204);
        res.send('token set in cookies');
    } else {
        res.sendStatus(404)
    }
})

app.get('/user', checkCookieToken, (req, res) => {

    const findUser = res.locals.user;

    if (!findUser) return res.sendStatus(404);

    if (!findUser.isAdmin) return res.json({ user: findUser });

    else return res.json({ user: users });

})

app.listen('3000', () => log("Server is running: http://localhost:3000"));