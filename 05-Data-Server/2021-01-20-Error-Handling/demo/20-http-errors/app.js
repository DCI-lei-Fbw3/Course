// https://www.npmjs.com/package/http-errors
var createError = require('http-errors');
var express = require('express');
var app = express();

app.listen(3000, (err) => {
    if (err) console.log(err);
    console.log(
`Server Running at http://localhost:3000`);
});

app.use((req, res, next) => {
    if (!req.user) return next(
        createError(401, 'Please Login ')
    );

    next(); 
});

app.use(errorHandlerLogging);

function errorHandlerLogging(err, req, res, next) {
    console.log("ERROR - ", err.toString(), '( query-parameters:', 'a =', req.query.a, ')');
    next();
}

