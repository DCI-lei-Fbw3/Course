const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || '3000';
app.listen(port, () => console.log(`We are listening to port :${port}`));

app.use(cors());

app.get('/apple', (req, res) => {
    res.send({ name: 'Karl' });
});

app.get('/banana', cors(), (req, res) => {
    res.send('Does this work?');
});

