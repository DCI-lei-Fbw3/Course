const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sassMiddleware = require("node-sass-middleware");
const path = require("path");


// require database connection
const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");
const auth = require("./auth");
const cookieParser = require('cookie-parser');

// execute database connection
dbConnect();

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


// sass/scss setup
// in order to compile our sass/scss files to css we use node-sass-middleware
// we provide a config to tell the middleware how to compile
app.use(sassMiddleware({
  // with src we define the directory that the compiler has to look for sass/scss files
  // it includes every subdirectory, so in our project we can store them in /public/styles
  src: path.join(__dirname, 'public'),
  // dest is the destination path for the compiled css file
  dest: path.join(__dirname, 'public'),
  // when we want to use sass, we need to change indentedSyntax to true
  // that means that we can write sass syntax (omit curly braces and semicolons, but have to indent properly)
  indentedSyntax: false,
  // the source map is an additional file that the browser uses to point to the origin of a specific style
  // since the css file is generated from one or many sass/scss files we can not see this directly
  sourceMap: true,
  // this property removes all unnecessary characters, spaces, line breaks,...
  outputStyle: "compressed",
}));

// views setup with ejs
// we tell express to use ejs as our view engine
app.set("view engine", "ejs");
// per default, express searches for view files inside the /views dir
// we can change this behavior by using the following line
// app.set('views', path.join(__dirname, 'views'));

// in order to serve the css files (and maybe also images in the future) we can use express.static to serve files from a specific dir
// in this application we use the public dir
app.use(express.static(path.join(__dirname, "public")));


//the front page route
app.get("/", (req, res, next) => {
  res.render("frontpage", { title: "EJS Auth + Express Sessions!" });
  next();
});

//the login page route
app.get("/login-page", (req, res) => {
  res.render("loginpage");
});

//the signup page route
app.get("/signup-page", (req, res) => {
  res.render("signuppage");
});


// register endpoint
app.post("/register", (request, response) => {
  // hash the password
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const user = new User({
        email: request.body.email,
        password: hashedPassword,
      });

      // save the new user
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        // catch erroe if the new user wasn't added successfully to the database
        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});


//Products route
//Since Products route is supposed to be only accessible in a user session (its protected), we pass the auth middleware in the request

app.get("/products", auth,  (req, res) => {
  /*
      Workflow: get products page
      ---------------------------------
      - get request from browser
      - middleware: check if logged in (verify token/check session)
          => loggedIn true/false
          => (optional) redirect to login page
      - in route:
          - fetch the products from the database
          - pass products to the view (as object in res.render or via res.locals)
      - in view:
          - render the output
      => send the final html back to the browser
  */

  // in this example we use this products array
  // you can change it to fetch the products from your database
  const products = [
      {
          name: "Product 1",
          description: "Description 1 from Product Object",
      },
      {
          name: "Product 2",
          description: "Description 2 from Product Object",
      },
      {
          name: "Product 3",
          description: "Description 3 from Product Object",
      },
      {
          name: "Product 4",
          description: "Description 4 from Product Object",
      },
      {
          name: "Product 5",
          description: "Description 5 from Product Object",
      },
  ];

  res.render("productspage", { products });
});




// login endpoint
app.post("/login", (request, response) => {
  // check if email exists
  User.findOne({ email: request.body.email })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {

          // check if password matches
          if(!passwordCheck) {
            return response.status(400).send({
              message: "Passwords do not match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },

            "RANDOM-TOKEN",
            { expiresIn: "1h" }
          );

          //   return success response
          //send token in a response cookie
          response.cookie('session', token)
          response.redirect(200, '/products')
        })
        // catch error if password do not match
        .catch((error) => {
          response.status(400).send({
            message: "Password does not match",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});

// free endpoint
app.get("/free-endpoint", (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth-endpoint", auth, (request, response) => {
  response.send({ message: "You are authorized to access me" });
});

module.exports = app;
