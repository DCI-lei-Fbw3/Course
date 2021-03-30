//Welcome Fbw3!
//Topic: Express sessions -- Data Persistence

    // Intro

    /* 
    - What if we need a global state for our SSR Express application? well, we have an easy solutions with express cookie sessions.
    - Cooki based sessions, use the browser cookies to enable the browser to remember which user its communicating with.
    */

    //Looking further in Cookies

    /* 
    - Third-party cookies became an issue. When companies could inject cookies into third-party websites, this
    created a loophole in web apps. The idea was to use cookies for tracking.
    - However, third-party cookies will be soon universally banned from browsers. Some browsers have already implemented this, others, like Chrome, need a couple of years.
    -The things is, that HHTP requests are stateless. That means that wehn you load a page in your browser, and then you navigate to another page on the same website, neither the server nor the browser has any way of knowing its same borwser visiting the same site.
    - To create a way for the server and browser to "remember" which user is interacting with the applicaiton in the browser, we can use cookie-based sessions. 
    -The idea of a cookie is quite simple: 
        The server sends a bit of of information (4 Kbs allowed) and the browser stores it for some configurable time period.
    - Cookies are not secret from the user. 
    - Cookie secrets are strings chose by the developer. The developer can also restrict the browser to only recieve cookies over secure protocol (HTTPS).
    - The user is must be able to secure or disallow cookies in Europe, that is the law of the land. If any lawyer in Europe lands on a landing/app with cookies and no cookie Policy and/or Cookie disallowing functionality, the lawyer can sue you for 400 euros.
    - Cookie can be used for corss-site attacks. Hackers can imitate your browser, and send back a cookie to the server with pieces of code that allow them access to the server. Our job is to make it as painful for the hackers as possible.
    - Don't misuse cookies, users will notice and this can lead to very severe consquences with litigation and such.
    - To maintain state, use cookie-sessions, instead of just good old plain cookies for state management.
    */

    //Intro to Sessions

    /* 
    - Sessions are really just a more convenient and secure way of maintaining your state.
    - To implement a session, SOMETHING needs to be stored on the client; otherwise, the server wouldn't be able to identify the client from one request to the next
    - Usually, sessions are identified by unique identifier (e.g. uid, sid, or uid+sid)
    - Broadly speaking, there are two ways to implementing sessions:
    1) store everything in the cookie,
    2) store only a unique identifier in the cookie and everything else on the server (this is the approach we have seen together, but maybe not discussed enough)

    - We are gonna look at 2 strategies for creating sessions in any express application:
        1) Cookie-based session --> statefull
        2) JWT based session --> stateless
    */

    //Example

    /* 
    - Take mongo-express-auth demo from 2 weeks, and combine with Domonik's frontend
    - Fix the routing
    - Create a session based on the JWT
    
    */

    //Cookie-based session

    /* 
    - Cookie-based sessions are the "traditional" method for creating browser sessions in server-side frameworks.
    - Cookie-based sessions are also statefull, meaning these sessions "remember" your's user's state in your application.
    - Such sessions:
            - require a store (which can be inMemory or on a daatabase)
            - requore a cookie to be signed and sent to the browser
            - the server will cross-check the data in the cookie with the data in the store. 
    - Some benefits of using this strategy, inlude:
        - Persistant is maintained throughout your app logic
        - More secure because, your Store is server side. 
    - If you have tone of session request at once, your server needs to have the (compute) power to be able to handle all those sessions.
    
    */

    //JWT sessions

    /* 
    - What we do here with JWT is technically not a sessio, its authorization.
    - Because we do track when a user is logging in, it is not really session.
    - However, JWT can be used to create a "sense" for a session, because it allows users to interact with your server until the JWT exists.
    - In JWT sessions, we do not store anything server-side, so we do not need any Store.
    - This is more of a validation than a session, yet you will see articles and books and turials calling approach a session.
    - JWT sessions are the more modern approach to sessions, why? you may ask:
        - Firstly, your server does not need the same amount of computer power to process sessions.
        - It is working better than cookies in different browsers.
    
    */
