//------- Create a simple online banking application that comprises the following features:
/*

1 - There is an authentication function that takes[IBAN & pincode] and returns a "token number"(it can be a random number too).
For instance: curl - d "IBAN=DE000000000&picode=1234" - X POST  http://localhost:7000/authentication

2 - Create a function that takes the generated token and a given amount, and allows you to transfer some money to your bank account(increase your current balance)
For instance: curl - d "token={generatedToken}&amount=1000" - X POST  http://localhost:7000/transfer

3 - Create a function that takes the generate token and a given amount   to withdraw this amount from your current balance:
For instance: curl - d "token={generatedToken}&amount=1000" - X POST  http://localhost:7000/withdraw

4 - Create a function that takes the generate token and presents your current balance(by taking the token alone):
*/

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || '7000';
app.listen(port, () => { console.log(`You are listening to port ${port}`) });


//MiddleWare
const user = require('./controller/user');
const details = require('./controller/details.js');
// const transfer = require('./controller/transfer.js');
// const withdraw = require('./controller/withdraw.js');     //<--Transfer files a moved them into a route folder/file.
// const balance = require('./controller/balance.js');
const tokenCheck = require('./middleWare/tokenCheck');

//Router
const bankRoutes = require('./routes/bankRoutes.js');  //*<--Saving the routing file to a variable.


app.post('/details', details.details);
// app.post('/transfer', tokenCheck, transfer);      //<--Transfer files a moved them into a route folder/file.
// app.post('/withdraw', tokenCheck, withdraw);
// app.post('/balance', tokenCheck, balance);

//Route
app.use('/', tokenCheck, bankRoutes());      //*If we don't call a path ('/') it will execute on every request.


//*Calling on the variable that links to the banking routes at the end.
//!So we are saying, use this command when called, path, tokenChecker function/file.js and then the bankRoutes router post/file

let genToken = Math.floor(Math.random() * 10000);
user.token = genToken;
