# Server not Reachable

- disable the server
- in the `remote_api.html` add a `.catch(...)` to the chain of Promises and handle the error by showing an alert-box with `alert(e)` (where `e` is the caught error).
