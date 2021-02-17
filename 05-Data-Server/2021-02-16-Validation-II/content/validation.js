//Welcome Fbw3!
//Topic: Data Validation & Sanitization

/* 
Summary:
- Validation is the process of making sure your data fits your data model. 
- Validation helps to make sure your programme does not crash due to morphed data.
- When debugging your frontend, morphed data is a common source of concern.
- Client-side validation is not enough and it may be subverted.
- Client-side validation is more prone to "Man in the middle" attacks.
- A user can turn off client-side JS validation and manipulate the data.

- The best practice (for security) is to have server side or database side valdiation.
- In express, we can use a library called express-validator for all server-level validation
        Docs: https://express-validator.github.io/docs/index.html

- express-validator allows you to use all validation methods from validate.js 
without having to write too much code yourself.
- Basically, express-validator gives you a toolset to validate incoming data.
*/

/* Example Form 

Assumptions--


1. Data model:
{
    name: "",
    email: ""
    age: Number
}

2. Validate:
    - name is a string of at least 3 characters
    - email is a real email (example@example.com) 
    - age is a number betwee 0, 130

3. This file here is a server file

*/

const { check, validationResult } = require('express-validator');

//1. Create POST request
//2. Create "Checks" using express-validator middleware
//3. Pass an error if validation fails
app.post('/form', [
    check('name').isLength({ min: 3 }),
    check('email').isEmail(),
    check('age').isNumeric()
], (req,res) =>{
    //the validationResult method will return the errors thrown by our validation chain
    const error  = validationResult(req)
    if(!error.isEmpty()){
        //IF validation fails, the server here responds with an object that has an array of error values representing the failed validation
        return res.status(422).json({ error : error.array()})
    }
    //IF validation passes, store the req body to variables and do whatever our logic is supposed to do
    const name = req.body.name
    const email = req.body.email
    const age = req.body.age

}
)

/* Notes:

- If you dont have a security "worry" for your app' use case, stick to client-side validation.
- Server-side validation is really "pro" stuff.
- So why do developers end up using Mongoose and Express-Validator to validate data?
- Taimur thinks there are two reason people use either express-validator ir mongoose validation API:
    1. If the validation logic is simple and small, there is no problem using Mongoose.
    But in case of complex and custom validation rules, express-validator is worth looking into.
    However recently, mongoose also enabled custom validation rules.
    2. Which way you validate, also depends on the code execution flow you want. 
    Express-validator is a validation middleware. 
    Whereas, Mongoose enables controller level validation.


- Mongoose validation: 
https://mongoosejs.com/docs/validation.html#built-in-validators
*/
