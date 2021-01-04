//Welcome Fbw3!
//Topic: Cross-Origin Resource Sharing (CORS)
//Reading Assigment: https://javascript.info/fetch-crossorigin


/* 
Learning Objectives:
- Understand Same-Origin-Policy in the browser
- Understand when CORS becomes relevant
- Understand how to enable CORS client side (with request headers)
*/

    
//Definition 

/* 
- "Cross-Origin Resource Sharing (CORS), is an HTTP-header based mechanism that allows a server 
to indicate any other origins" -- MDN Docs (https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- For sectutrity reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example,
if you want to access your API hosted on "https://api.github.com" from your client-side (frontend)
which is hosted on "www.myfrontend.com", the browser will not allow this request to complete. 
- You only need to think about CORS when:
    1. API accesses by the browser (if you frontend is trying to consume an API),
    2. API is hosted on a seperate domain (a third-party API, or even your own API from a different project)
    3. If you are programming a server (seperate from your frontend) to send a bunch of requests and responses 
    to client browsers.
- So, why does this happen? Or why do we need CORS?
    Browsers enforce a security feature called Same Origin Policy. According to the same origin policy, the 
Same Origin calls/requests are allowed and any Different Origin calls/requests are not allowed.
- This is where CORS comes into picture: CORS allows the server to explicitly whitelist certain origin
to help bypasas the same-origin-policy.
- How do we use CORS?
    If you server is confirgured for CORS, it will return an extra header with the the following:
        "Access-Control-Allow-Origin": "*" --> * in programming is refering to a wildcard value 

 - This "Access-Control-Allow-Origin" will allow you to bypass the Same Origin policy       
*/