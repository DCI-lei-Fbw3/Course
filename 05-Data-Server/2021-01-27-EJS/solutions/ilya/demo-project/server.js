const express = require('express');
const app = express();
const port = process.env.PORT || '3500';

const log = console.log;

/* set view engine */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    /* res.sendFile(__dirname + '/views/index.html'); */ /* without setting view engine */
    res.render('index', {
        h1: 'edited H1', 
        secondP: "<p>That's the second paragraph</p>",
        fruits: ['apple', 'banana', 'watermelon']
    }); /* points to the file to for inside the folder specified in line 9 */
});

/* breaks ejs
<!-- // ejs element: <%= SOME VALUE %> -> value, <%- SOME VALUE %> -> interpreted as html  --> 
*/

app.get('/nextpage', (req, res) => {
    res.render('nextpage');
})

app.listen(port, () => log(`Server running: http://localhost:${port}`));