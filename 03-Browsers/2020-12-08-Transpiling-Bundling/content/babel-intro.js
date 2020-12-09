// Welcome FbW3!
//Topic: Transpiling and Bundling
//Reference: https://flaviocopes.com/babel/

/* Learning Objectives
- Understand the context of package bundlers such as webpack, 
and use related tools
- Understand and explain the advantages of using transpilers such as Babel 
for browser compatibility
- Compare between project dependencies and development dependencies
- Add and use third party modules from the npm registry
- Check out DCI Vanilla JS Boilerplate https://github.com/DigitalCareerInstitute/Browser-ComingSoon/blob/master/template.md
 */


 // Transpiling ES6 to ES5 --> Intro to Babel

    /* Notes:

    - Babel is a free and open source JS compiler and transpiler
    - A transpiler is a tool that transforms code from one share to another 
    (ES6 --> ES5)
    - It was created at Facebook in 2014, and the current version is Babel 7
    - Babel has support for the latest version of JS through syntax transformers.
    - These trasnformers are available us in the shape of plug-ins, which
    allow us to use new syntax without having to worry about browser support.
    */

    /* Things that you should know:

    - Transpilers, or source-to-source compilers, are tools that source code
    written in one programming language and produce the equivalent code in another
    language (Wikipaedia).
    - NPM is a package manager for JS, with a huge listing of resuable code modules
    and packages. You can specify all your project's dependencies inside your
    package.json file. So anytime you install a new package (npm install xxxxx), this
    will immediately add the packge as a dependency to your package.json file.
    - local vs global packages --> local packages are local to your program/directory
    where you install them, whereas global packages are installed your OS.
    - In general, all packages should be installed locally.
    */

    /* Let's look at an example in the babel-example folder
    
    - If confused about NPM, please read NPM docs on: 
    - Do not run index.html with Live Share after you transpile code with babel
    - We transpiled our ES6 modukes from yesterday's class (math.js, app.js, max.js)
    to ES5 modules using Babel.

    Steps:
    - Create a folder structure
    - Make sure your terminal is in the right directory
    - Check if you have Node installled by running "node -v" in your terminal
    - Run "npm init", to initialise a node app
    - Install babel using instructions from: https://babeljs.io/setup#installation
    - Run the transpiled code in node by running "node <folder>/<file.js>"


    One last note: 

    - Using babel with Vanilla JS is an overkill at the moment, 
    - You will run into errors (as always), but the idea to work throught them
    and understand how things work in the process. 
    - Babel is mostly used with node or frameworks like React, Vue or Angular.

        */

//Bundling -- A (very brief) intro to Webpack

    //Reference: https://webpack.js.org/guides/getting-started/

    /* 
    - Module bundlers are used to bundle several modules into one or more
    optimized bundles for the browser. This lets you use require('modules')
    in the browser by bundling up all of your dependencies.  
    - A great way of working with Babel in the browser is to use code 
    bundkers such as Webpack, Browserify, Parcel etc. 
    
   */ 


//Conclusions

    /* 
    - Babel is a toolchain that is mainly used to convert ECMAScript 2015+
    code into a bakcwards compatible version of JS in current or older browser
    environments.
    - Here are some of the main things that Babel can do for you:
        - Transform synatax
        - Codemods, so you can control how/if to change the transpiled code
        in comparison to the source code.
        - Polyfills, Babel lets you to add features that are missing in your
        target environment. 

    */

    