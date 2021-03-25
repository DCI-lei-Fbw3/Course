// we could create a new app with express generator
// however, this will give us a lot more code than we actually need
// we can keep it simple by creating our own app
// if you like to check out the result of express generator, run the following command:
// npx express-generator <projectname> --view ejs  --css sass

const express = require("express");
const path = require("path");
const sassMiddleware = require("node-sass-middleware");
const app = express();

const port = 3005;
app.listen(port, () => console.log("listening on port 3005"));

// body parser
app.use(express.urlencoded({ extended: true }));

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

app.use((req, res, next) => {
    // when we set a property in res.locals, this one becomes available in all ejs files
    // it is similar to a global state or a context in React where we don't have to pass props through all components
    res.locals.loggedIn = false;
    next();
});

// routes
app.get("/", (req, res) => {
    res.render("frontpage", { title: "My dynamic title!" });
});

app.get("/products", (req, res) => {
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


app.get("/login", (req, res) => {
    res.render("loginpage");
});


app.post("/login", (req, res) => {
    // once we set up our body parser middleware, we have access to the form data in req.body
    console.log({ body: req.body });
    res.render("loginpage");
})
