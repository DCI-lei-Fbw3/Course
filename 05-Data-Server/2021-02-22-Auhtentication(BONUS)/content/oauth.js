//Welcome FbW3!
//Topic: Authentication - Bonus: OAuth2
//Reference 1: https://oauth.net/2/
//Reference 2: https://auth0.com/docs/videos/learn-identity-series/openid-connect-and-oauth2
//Reference 3: https://simplelogin.io/developer/
//Reference 4: https://github.com/oauth-io

// Introducing oAuth (Open Authentication)

    /*
    Authentication vs Authorization

    - While often used interchangeably, authentication and authorization represent fundamemntally
    different functions.  
    - In simple terms, authentication is the process of verifying who a user is, while
    authorization is the process of verifying what they have access to. 
    - In short, 
    Authentication = login + password (who you are)
    Authorization = Permissions (what you are allowed to do)
    */


// Risks involved with Authentication and Authorization (in the traditional sense)

    /*
    Back in the day (15 years ago):
    - Applications used to store user's passwords as plain text
    - Servers were required to support password authentication
    - Overly-broard access was granted (when a third-party program needed access)
    - Users also could not revoke access to third-party programs (like Github or Good)
    except by changing user's password
    - A compromised third-party app meant you application was also compromised 
    */

//What is OAUTH 2.0?
    
    /* 
    - In a nutshell, OAuth is a framework letting developers decide how to get a 
    token and how to use a token for their users.
    - OAuth is really helpful beucase it lets you define clear roles in your program logic.
    - The OAuth protocol work with 4 clearly defined roles in the authentication/authorization process.
    These roles are:

        1. Client: The browser, or mobile app, or any network based program.
        2. Resource owner: This is the user
        3. Authorization server: The authorization server authenticates the resource owner and client
        4. Resource: An Outh protected resource available through an HTTP server.
        
    */

/* 
OAuth allows you to create Authorization servers that handle the security and reliability
of your authentication and authorization system in a standard way accross board.
*/