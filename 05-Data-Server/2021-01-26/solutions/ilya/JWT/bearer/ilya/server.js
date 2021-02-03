// Require libraries
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const log = console.log;

// Set express
const app = express();

// Set secret for JWT signature
const secret = 'secret1234567'

// Middleware function to parse incoming requests with JSON
app.use(cors(), express.json());

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

// Header structure
// authorization: Bearer <access_token>

// Verify Token
const authBearerToken = (req, res, next) => {
    // Get auth header value
    log('req.header:', req.headers);
    const bearerHeader = req.headers.authorization;
    // Check if bearer is undefined
    log(req.headers.authorization);
    if (!bearerHeader) {
        return res.status(403).send('line: 44');
    };

    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const token = bearer[1];
    // Check if token is undefined
    if (!token) {
        log('line 55 triggered');
        return res.status(403).send('line: 51');
    }

    // Verify token
    jwt.verify(token, secret, (error, payload) => {
        if (error) {
            // Print error
            console.error('Error line 57:', err)
            // Forbidden 
            return res.status(403).send('line: 59');
        }
        // Set user
        req.user = payload;
        // Next middleware
        next();
    })
}

/* ROUTES */
/* 
catch all reqs, move to bottom otherwise further routes = unreachable 
app.get('/*', (req, res) => {
    */
app.get('/', (req, res) => {
    res.status(200).send('Welcome ! :)');
})

// endpoint to get the authentication (JWT) token
app.post('/login', (req, res) => {

    /*   
        log('||||||||||||||||||||||||||||||||||||||||||||||||||req: ', req);
        log('""""""""""""""""""""""""""""""""""""""""""""""""""req.body: ', req.body); 
    */

    // Get name parameter from body
    const { name } = req.body;
    // const name = req.body.name;

    // Find user in users array by name
    const findUser = users.find(user => user.name === name);
    // Check if user exist
    if (findUser) {
        // Create and return token in json format
        res.json({
            token: jwt.sign(findUser, secret)
        })
    } else {
        // User not found
        res.sendStatus(404)
    }
})

app.get('/user', authBearerToken, (req, res) => {
    // Find user in users array
    log(req);
    const findUser = req.user.name;
    // Check if user exist

    if (!findUser) return res.sendStatus(404);

    if (!findUser.isAdmin) {
        // Return user
        return res.json({
            user: findUser
        })

    } else {
        // Return user
        return res.json({
            user: users
        })
    }


})


// Run server on defined port
app.listen('8080', () => log("Server is running: http://localhost:8080"));