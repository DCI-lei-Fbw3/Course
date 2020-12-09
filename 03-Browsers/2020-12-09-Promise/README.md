
## Introduction: The request response cycle - Client perspective

## Non-Blocking Promises:
- Blocking vs. Non-Blocking code: A brief example, `window.setTimeout()`
- Race conditions: Reading non blocking code

  For an example see: https://en.wikipedia.org/wiki/Race_condition#Example

- Promises:
  `new Promise(<function>)`, `Promise.resolve()`, `Promise.then()`
- Promisifying: Converting `setTimeout()` to a promise
- Breaking Promises:
  `Promise.reject()`, `Promise.catch()`, `Promise.finally()`

### Reading:
https://eloquentjavascript.net/11_async.html

## JSON: "JSON is JS Objects in text"
- Converting objects to JSON: `JSON.stringify(<object>)`
- Parsing JSON objects: `JSON.parse(<JSON string>)`
- JSON pitfalls: strict notation, `JSON.parse()` causes runtime errors
- Better error handling:
  Promisifying `JSON.parse()`, `try {...} catch(e) {...}` repeats
