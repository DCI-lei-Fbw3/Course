/*
- Create your own small server with a route and a response
- Crete a small app server which accesses it
- Enable cors globally
- Enable cors on only one route
*/



const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || '7000';
app.listen(port, () => { console.log(`You are listening to port ${port}`) });

app.use(cors());

app.use('/', express.static('html'));