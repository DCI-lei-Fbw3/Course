# Handling of an Unresponsive API-Server

In order to demonstrate an unresponsive server a route "/api/user_delayed" has been added to the API-server.

Locate the route and the corresponding handler.
How long is the delay?

-   disable the API-server

    -   What is the error message?
    -   Is there a noticable delay before the error-message is displayed? - Explain that behaviour.

-   enable the API-server
    -   What is the error message?
    -   Is there a noticable delay before the error-message is displayed? - Explain that behaviour.


One alternative to the shown approach to handle unresponsive servers could be an "AbortController". 
