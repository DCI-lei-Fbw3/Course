# Handling of an Unresponsive API-Server

Introduce a timeout for the fetch request, so that a non-responsive API-server is handled.

- disable the API-server
- think into the direction of a promise

- display an error message, in the sense of

  `"Could not retrieve TARGET_URL."`


## Hints

Promising solutions may involve using:
- setTimeout() to reject a promise.
- or Promise.race()
- or an AbortController
