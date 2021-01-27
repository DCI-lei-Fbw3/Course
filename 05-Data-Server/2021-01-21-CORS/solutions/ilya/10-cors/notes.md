// Client and server

- Entity trying to access the server
- Browser/App: what we as webdevs are usually talking about with 'client'
- Client == "Front End"

// What is a server?

- Server: Like a giant roundabout directing requests in the right way
- Server provides a connection to:
  - Database: where you store data
  - Files
  - Applications: HTML, CSS, JavaScript
- Server is a programme: Routes are telling us HOW to connect all these points

// When we send a request to our own server, there aren't any problems.

Example: If my husband asks me for a glass of water, I'll say yes because we're at home, I know who he is, and the request makes sense. If my neighbour yells out for a glass of water, my default is "No" because... Why? Who are you?

// What is the JavaScript/Node/Express default for servers and requests?

- "I will not accept any request from a server different to my own"

Server A: Your website

- Send a request to Server B
- CORS Error : "Cross Origin" requests

Server B: Info you want to fetch

- Default: Not accept your request

// Enter CORS package:

This allows our server to be accessible by everyone, and ignore the default behaviour of JavaScript/Node/etc.

// const cors = require("cors")
// app.use(cors()) <-- 'Approve' all requests on all my routes

CORS: Communication between different servers <-- Sometimes want to enable this
Within the same server: "Same Origin", "Shared Origin" or "Single Origin" <-- Default

// Task:

- Create your own small server with a route and a response
- Crete a small app server which accesses it
- Enable cors globally
- Enable cors on only one route
