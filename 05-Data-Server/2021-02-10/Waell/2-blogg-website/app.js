const express = require('express');

// require db model to use database function
const db = require('./models/db');

const app = express();

const port = process.env.PORT || 3000;

// use express body parser to get the sent posted [POST] data from any form or fetch uses dataform
app.use(express.urlencoded({extended: true}));
// use express json methond to lett the app read any sent json data usualy from fetch
app.use(express.json());


// set Ejs configuration
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// set the static public folder
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) =>{
    res.render('index');
});

app.get('/about', (req, res) =>{
    res.render('about');
});

app.get('/blog', (req, res) =>{
    db.getComments().then(comments => {
        res.render('blog', {comments});
    }).catch(error => {
        res.render('blog', {comments: []});
    });
    
});

app.post('/blog', (req, res) =>{
    console.log(req.body);
    //res.render('blog');
    db.addComment(req.body.name, req.body.email, req.body.comment, Date.now()).then(() => {

        db.getComments().then(comments => {
            res.render('blog', {comments});
        }).catch(error => {
            res.render('blog', {comments: []});
        });

    }).catch(error => {
        res.send('there were errors on saving your comment ' + error.message);
    })
});


app.get('/contact', (req, res) =>{
    res.render('contact');
});

app.get('/marketing', (req, res) =>{
    res.render('marketing');
});

app.get('/login', (req, res) =>{
    res.render('login');
});

app.get('/register', (req, res) =>{
    res.render('register');
});

app.post('/register', (req, res) => {
    console.log(req.body);
    const {fName, lName, email, password} = req.body;
    db.registerUser(fName, lName, email, password).then(() => {
        res.send('you are registered');
    }).catch(error => {
        if (error.code === 11000){
            res.send("this email is already registered")
        } else {
            res.send(error.message)
        }
    })
});

app.listen(port, () => {
    console.log(`App is listening to port ${port}`);
});