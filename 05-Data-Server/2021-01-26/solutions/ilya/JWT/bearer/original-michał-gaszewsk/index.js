// Require libraries
const express = require('express')
const jwt = require('jsonwebtoken')

// Set express
const app = express()
// Middleware function to parses incoming requests with JSON
app.use(express.json())

// Create users array
const users = [
    {
        id: 1,
        name: 'Jack'
    },
    {
        id: 2,
        name: 'John'
    }
]

// Set secret for JWT signature
const secret = 'secret1234567'

app.get('/', (req, res) => {
    res.json({
        version: '1.0.0'
    })
})

// Endpoint to get the authentication (JWT) token
app.post('/login', (req, res) => {
    // Get user parameter from body
    const {user} = req.body
    // Find user in users array
    const findUser = users.find(x => x.name === user)
    // Check if user exist
    if (findUser) {
        // Create and return token
        res.json({
            token: jwt.sign(findUser, secret)
        })
    } else {
        // User not found
        res.sendStatus(404)
    }
})

app.get('/user', authenticateToken, (req, res) => {
    // Find user in users array
    const findUser = users.find(x => x.name === req.user.name)
    // Check if user exist
    if (findUser) {
        // Return user
        res.json({
            user: findUser
        })
    } else {
        // User not found
        res.sendStatus(404)
    }
})

// Header structure
// Authorization: Bearer <access_token>

// Verify Token
function authenticateToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization']
    // Check if bearer is undefined
    if(!bearerHeader) return res.sendStatus(403)

    // Split at the space
    const bearer = bearerHeader.split(' ')
    // Get token from array
    const token = bearer[1]
    // Check if token is undefined
    if(!token) return res.sendStatus(403)

    // Verify token
    jwt.verify(token, secret, (err, user) => {
        if (err) {
            // Print error
            console.error('Error:', err)
            // Forbidden 
            return res.sendStatus(403)
        }
        // Set user
        req.user = user
        // Next middleware
        next()
    })
}

// Run server on defined port
app.listen('8080', () => { console.log("API run on 8080 port")})