//Welcome FbW3!
//Topic: Intro to Server Side JS with Node.JS
//Reading: https://medium.com/jspoint/introduction-to-node-js-a-beginners-guide-to-node-js-and-npm-eca9c408f9fe
//Reference: https://nodejs.dev/learn/introduction-to-nodejs

/* Learning Outcomes
- List use cases for running JS on the operating system
- Use the process object to accept arguments from the terminal
- Add and use third party modules from the npm registry
*/

// Intro to Node

    /*
    What is Node?
    "Node.js is an open-source and cross-platform Javascript runtime environment. It is a 
    popular tool for almost any kind of project."
    
    - At the most fundamental level, Node allows us to create a JS environment.
    - Node allows us to work with the actual hardware or network of a computing device 
    - Node is working on top of C++ to handle all low-level processes (I/O, network, databases/filesystem)
    - ** Node allowed us to operate on a low-level in JS.
    - Node js changed how JS is treated by developers, becuase with Node JS becomes
    a full-fledge programming language.
    - For our course, the single most important aspect of Node js is the ability to handle
    network requests (HTTP). Because this allows us developers to create servers in JS. 

    - The most important thing for you will be the ability to learn Node js using 
    its documentation.

    */


// Node JS -- Modules
// Reference: https://nodejs.org/api/esm.html

    /* 
    - To run any JS using node, open up a command shell/terminal and execute command as:
    node <<<FILENAME>>> --> the Node js Event Loop will execute the code in this file

    - Modules are resuable functionality, they can a fucntion, class, onject, or simple variables.
    - To import a module, we use require() (ES5) or import and export statements
    
    */

    /* 
    - Node come with a set of Core Modules: https://flaviocopes.com/node-core-modules/
    - Node also work with self-created modules
    - Node also allows us to work with third-party modules from the NPM registry
    */


// Process Object
//Reference: https://nodejs.org/api/process.html

    /* 
    - Ever node module has a globally avaiable object inside called the "Process" Object
    - It contains functionalities which allow us to interact with the current process
    in the system.
    - A process is an individual step in your Node js program.
    - The Process object provides information about the runtime environment. 
    - The process object can:
        1) allow you to terminate a Node application
        2) alow you signal when the Node event loop (discuss this later) has fiinished 
        a cycle.

    */

    /* Some other props of the Process Object:

    - process.argv -->  "The process.argv property returns an array containing the command-line arguments passed 
    when the Node.js process was launched."
    - process.versions --> The version of all the internal core modules
    - process.env --> Meta data on the process environment (which is the environment where the processes runs)
    
    
    */

// Capturing user input in Node CLI
// Reference: https://nodejs.org/api/readline.html
// Resource: https://www.npmjs.com/package/inquirer --> creating interactive CLI applications

    /* 
    - You can use the readline core mdoule of Node to create an input/output logic
    with the CLI.
    - You can create CLI question using Readline.interface.question propoerty (https://nodejs.org/api/readline.html#readline_rl_question_query_callback)
    */