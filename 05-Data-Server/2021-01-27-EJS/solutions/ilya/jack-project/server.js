const express = require('express');
const app = express();
const port = process.env.PORT || '3500';

const log = console.log;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.redirect('index');
}); 

/* helper functions for dynamic li states */
let page = '';
const setState = (href) => href === page ? 'active' : '';

app.get('/:page', (req, res) => {
    log(req.params); /* nice one... */
    page = req.params.page;
    res.render(page, { setState });
});

/* useful

 terminal: killall node
 vs code: find all and replace: ctrl + f, open replace (right arrow to the left), ctrl+alt+enter to modify all

*/

app.listen(port, () => console.log(`Server running: http://localhost:${port}`));
