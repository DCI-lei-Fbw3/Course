## Exercise

Create a server with the following endpoints:
    - GET /products
        => returns all products as an array

    - GET /products/:articleNo
        => returns one product with :articleNo as an object

    - POST /products
        => creates a new product and returns it

    - PUT /products/:articleNo
        => updates a product identified by :articleNo and returns the new one

    - DELETE /products/:articleNo
        => deletes a product identified by :articleNo and returns nothing


1. focus on the project structure first: create the directories, routers and controllers

2. implement the endpoints with stub responses (empty arrays and objects, proper statuscodes)

3. set up the database connection to MongoDB using Mongoose

4. create a model for the products collection

5. implement the model in the controllers to replace the stubs
