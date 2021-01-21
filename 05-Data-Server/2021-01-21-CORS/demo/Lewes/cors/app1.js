
const express = require('express');
const cors = require('cors');

const app = express();
//app.use(cors());

const port = process.env.PORT || '7001';
app.listen(port, () => { console.log(`You are listening to port ${port}`) });

app.get('/cors/app1', cors(), (req, res) => {
    res.json({ name: 'Bek' })
})

app.get('/cors/app2', cors(), (req, res) => {
    res.json({ name: 'Waell' })
})

app.get('/cors/app3', (req, res) => {
    res.json({ name: 'Karl' })
})