## Explanations and Live Coding: Storing Passwords/Hash Algorithms

- storing passwords
- hash algorithms
- security issues
- salt & pepper
- brute-force
- dictionary attacks
- difficulty/cost
- bcrypt


## Exercise

1. Extend the server with the following endpoint:

    - POST /user
        => stores new user with hashed password and email address in database
            - use bcrypt with a cost of at least 12
            - use a pepper that is stored in a .env file
        => returns success message


2. Extend the server with the following endpoint:
    - POST /login
        => returns jwt (cookie or in body)


3. Create a middleware to secure POST /products, PUT /products/:articleNo and DELETE /products/:articleNo: only allow authenticated users to use these endpoints

4. Secure POST /user and POST /login with express validator
