Handling Errors:
- Error handling middleware signature: `(err, req, res, next) => { ... }`
- Changing response status: `res.status()`
- Using the error handler: `next(err)`
- Catching 404s with a default route:
  `app.use(<404 controller>)`

Formatting Errors: Using `http-errors`
- The `http-errors` api
- Creating error from error: `createError(<status>, <error>)`
- Constructing HTTP errors: `createError.<error constructor>(<message>)`
- Refactoring our error handler and 404 catcher
