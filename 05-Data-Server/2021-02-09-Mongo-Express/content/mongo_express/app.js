var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//TK' code
var { sup, another } = require('./mids/middle');
var { create, read } = require('./mids/db-crud');

//
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


/* 
@MongoDB stuff
*/
//TK: Connect to MongoDB


//

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);

//this is only if you
//app.use(sup);

//TK's code
/* app.get("/sup", sup, another, (req,res) => {
  res.send({ data : "hi"});

}); */

//create entry in db endpoint
app.get("/create", create, (req,res) => {
  res.send("");

});

//read entries in db endpoint
app.get("/read", read, (req,res) => {
  res.send("");

});

//
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
