## JSON: "JSON is JS Objects in text"
- Converting objects to JSON: `JSON.stringify(<object>)`
- Parsing JSON objects: `JSON.parse(<JSON string>)`
Note:
- JSON pitfalls: strict notation, `JSON.parse()` may cause runtime errors
  => not reproducible in Firefox

## Simplifying Asynchronous Code:
- Why use promises: callback hell, pyramid of doom
- Problems with promises: scoping issues, endless chain
- Using promises modernly:
  `async` functions, `await` keyword,
  "Async functions always return a promise"

## Getting data: Fetch examples
- 3rd Party APIs:
  brief introduction, why should making requests be asynchronous
- Getting info: `window.fetch(<url>)`, the response object overview
- Parsing JSON: `response.json()`
- Using data: `fetch(<url>).then(<callback>)`
