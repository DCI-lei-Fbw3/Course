//Welcome Fbw3!
// Topic: React - Authentication 
//Reference: https://reactrouter.com/web/example/auth-workflow

// Intro

    /* 
    - I have created a backend for your react app to communicate with
    - Github repo: https://github.com/thisistaimur/mongo-express-auth
    - This backend also in production on Heroku: https://mongo-express-auth.herokuapp.com
    - API Docs:
        - /register : POST --> email and pass to signup a new user
            Takes: {email: String, Password: String}
        - /login: POST --> to recieve a JWT and login an existing user
            Takes: {email: String, Password: String}
        - /auth-endpoint: GET --> authorize token on protected React pages
            Takes: {`Bearer ${Token}}

    - Please spend 30-45 mins understanding the backend implementation, but remain aware
    of the context here, which is to learn how auth works in React.
    */


    /* 
    - We will be using the following three react hooks:
        1) useState()
        2) useEffect()
        3) useContext() --> OPTIONAL for the bootsrap stuff

    - Today:
        1) Morning session is to set up the login/register pages
        2) look at the backend
        3) let you all set all this up as well. 
        4) Afternoon session: we will finish the react authentication
    */

    //Steps to secure Authentication
        /* 
        - Step 1: To create a login/signup system 
            1.1) Backend API, database, server, Tokens....(all that backend stuff)
            1.1) Frontend pages and logic
        - Step 2: Define protected vs non-protected pages
            2.2) Setting up React Router (ProtectedRoute)
        - Step 3: To protect the necessary Routes
            3.1) make sure you cross-check your token (in a cookie) with your server otherwise there is a security loophole
        - Step 4: To use tokens for maintaining session 
        */


    //BONUS --> Destructuring props

    //Example -- JS Object Destructuring

    /* 
    - For ECMAScript 6, there was a proposal to destructure objects with a Object Rest/Spread Properties method.
    - The proposal: https://github.com/tc39/proposal-object-rest-spread
    */

   const myObj = {
       name: 'Taimur Khan',
       age: 27,
       sex: 'M',
       height: "6 feet"
   }
    /* 
    - It might help to just think of React props as having the same trcture (i.e. propoerties and values)
    as shown in myObj.
    - the "..." is called the "spread" operator.
    */

   const {name:Username, ...rest} = myObj;

   /* 
    - JS, when it see the sytanx on line 70, it does the following:
        1) it takes the "name" propoerty from myObj, and assigns it to a new variable called "Username"
        2) It take the rest of the properties from myObj, and assign them to a new variable called "rest"
    - The syntax above amounts to both declaration and assignment of two variables (or, two constants).
    - You may wonder why go through all this trouble just to rename component to Component. 
    This here is purely trivial in nature. The only reason for using capital letters is because JSX is 
    case-sensitive and Facebook decided to always use this convention in their documentation.
   */

//Things to discuss:

    /* 
    - General overview of the auth process (connection to backend)
    - What did you not understanding
    - How did you attempt/plan to attempt an implementation.  
    */