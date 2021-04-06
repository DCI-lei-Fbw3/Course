//Welcome FbW3!
//Topic: User Sessions -- Statefull sessions
//Reference: https://www.npmjs.com/package/connect-mongo

    //Statefull sessions

    /* 
    - In use cases, you will to have a statefull user sessions.
    - Statefull sessions require you to send a cookie/token to the client, and this cookie will have a UID.
    - At the same time, you will create an entry in your database for the same UID.
    - Then, when a user submits a login form, your server should first send the cookie and then cross-check

    - To simplify statefull sessions in express, we can a library called connect-mongo.
    - connect-mongo is a MongoDB session store for express. 
    - This library is maintained by MongoDB Devs themselves, so it will stick around for some time. 
    - Statefull session have been around longer, and are the "older" way of doing things. 
    */

    // About connect-mongo

    /* 
    - Biggest dependency is express-session
    - Connect-Mongo does two things, it creates an express session and uses mongoDB as a session Store.
    */