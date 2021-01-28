const express = require('express');
const app = express();
const port = process.env.PORT || '3500';
const db= require('./models/db');

const log = console.log;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.redirect('index');
}); 

/* helper function for dynamic li states */
const setState = (href, page) => href === page ? 'active' : '';

app.get('/blog', async (req, res) => {
    const comments = await db.getComments({});    
    res.render('blog', { setState, comments });
});

app.post('/blog', async (req, res) => {
    const {name, email, comment} = req.body;
    await db.addComment({name , email, comment, commentDate: Date.now()});
    const comments = await db.getComments();
    res.render('blog' , { setState, comments });
});

app.get('/:page', (req, res) => {
    page = req.params.page;
    res.render(page, { setState });
});

app.post('/:page', (req, res) => {
    page = req.params.page;
    res.render(page, { setState });
}); 

app.listen(port, () => console.log(`Server running: http://localhost:${port}`));
