const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// *** error handling ***

// http://expressjs.com/en/guide/error-handling.html

// If an error is thrown (in synchronous code), Express catches and handles it:
app.get('/error', function (req, res) {
    // do some real stuff
    //if (error_condition_is_met)
    throw new Error('BROKEN') // Express will catch this on its own.
});

// plain Javascript:
/*
try {
  // do some stuff

  if (parameter < 0) {
    throw new Error("Parameter must be positive.")
  }
} catch (error) {
  console.log(error);
}
/**/

app.get('/pass_error', function (req, res, next) {
    var err = new Error('error - created and passed');
    if (err) next(err); // pass error to Express
});

// error in asynchronous code:
app.get('/error_in_async_code', function (req, res, next) {
    setTimeout(function () {
      try {
        throw new Error('error in asynchronous code "catched" and relayed to Express')
      } catch (err) {
        next(err) // error in async. code must explicitly be relayed to Express
      }
    }, 500) // 500 ms timeout
  })

// if an Error is thrown inside a promise
// the promise's catch can be used
// to pass the Error to Express via next
app.get('/promise_catch', function (req, res, next) {
    Promise.resolve().then(function () {
        throw new Error('error thrown from Promise and relayed via Promise.catch(next) to "next"');
    }).catch(next); // Errors will be passed to the default error handler.
    // this will also take care of rejected Promises
})

// customized 404 error handling
// @TODO: link for customization of 404s
app.use(function(req, res) {
    res.status(404).send('404 - Page not Found');
});
/**/

// logging
function logErrors(err, req, res, next) { // 4 parameters
    console.error("logErrors(): " + err.toString()) 
    // if a stacktrace is needed one could use "err.stack"
    next(err)
}

app.use(logErrors); // introduce the logError method as a middleware

// default error handler:
// Express' default error handler must be used if any header has already been sent:
function customErrorHandler(err, req, res, next) {
    console.log("customErrorHandler");

    if (res.headersSent) {
        console.log('headers already sent in customErrorHandler');
        return next(err); // relay to Express' default error handler
    }

    res.status(500);
    res.send(err.toString() + "\n<br>" + '500 - Internal Server Error');
}

app.use(customErrorHandler);
