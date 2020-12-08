// Welcome FbW3!
// Topic: Browser - Modules
// Reading: https://ponyfoo.com/articles/es6-modules-in-depth
// Reading 2: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules


/* 
Learning Objectives

- Understand common use cases and advantages of separating JS files into modules
- Add module based JS files to an HTML document
- Use ES6 syntax to import and export expressions from modules

*/


//Modules

    /* Definition
     - In JS, the "modules" refers to small units of independent, reusable code.
     - They are the foundation of many JS design patterns, can be critically necessary
     when buildig any substantial JS-based applications. 
     - In the simplest terms, modules help you to write code in your module and
     expose pnly those parts of the code that should be accessed by other parts of your
     code.
     - JS has had modules (in some shape or form) for a long time. However, they 
     were implemented via libraries, not built into the language.  
     - ES 6 is the first time that JS has built-in modules.


     What are modules?

    - Each module is a piece of code that is executed once a JS file is loaded
    - In that code (module), there may be declarations (variables, functions, classes etc)
    - By default, every declaration in that file stays local to that module and
    cannot be accessed in other modules unless the module file exports them.
    - Before modularity was common, it was impossible to refference or include one
    JS file in another. One of the only ways to do this, was by using the script tags
    */

    /* Script 
    
    <script src="app.js"></script>
    <script src="search.js"></script>
    <script src="user.js"></script>
    <script>
    console.log('inline code');
    </script>
    
    - This was bad practice as each script initiates a new HTTP request, which
    affects page performance and could disrupt further processing while it runs.

    - Let's say we have a file app.js and incldued in this file is a function 
    which checks every limit in a number and returns if its even or odd
    */

    // This function is in the app.js file
    /* function showNumbs (limit) {
        for (let i =0; i<=limit; i++){
            const message = (i%2===0) ? 'EVEN' :'ODD';
            console.log(i, message);
        }
    } */

    //showNumbs() --> to make this visible here from the app.js file, we will use modules

    /*  What you should know!
    - Everything inside an ES6 module is private by default, and runs in strict mode
    (there's no need for 'use strict').
    - Public variables, fuctions, and classes are exposed using "export"
    - Exposed modules are called into other modules using "import"
    - Modules must be included in your HTML with "type = module", which can be
    an inline or external script tag. 
    - Modules are deferred, and only run after the document is loaded
    */

    /* 
    <script src="app.js" type = "module"></script>

    <script>
    console.log('inline code');
    </script>
    
    */

//How to use ES6 Modules

    /* 
    - Let's create three files called app.js, math.js, max.js
    */    

    /* 
    - You can export variables, functions, or classes using "export"
    and import them in a different script with "import"
    - Named exports are useful to export several valies, so when you import
    those values in a different script you can use the corresponding names. 
    - Default exports should be limited to only a  single default export per
    module. A default export can be a function, class, or an object or anything else.
    
    */

//Importing with Aliases
//Reference:

    /* 
    - In some computer operating systems and programming language, an alias is an
    alternative and easier to understand or more significant name for a defined data object.

    */


//Exporting several modules from different files

/* 
- Modules are imported with either absolut or relative references and must start
with either "/", "./", or "../"

- Some common mistake in import statements
    - import {sumAll} from 'math.js'; --> this is wrong
    - import {sumAll} from 'lib/math.js'; --> this is wrong

    - import {sumAll} from './math.js';  --> this is right
    - import {sumAll} from '../math.js';  --> this is right
    - import {sumAll} from 'https://someURL.com';  --> this is right


*/

// Advantages of using modules

/* 
- Code can be split into smaller files of self-contained functionality.
- Multiple script can be concatenated thereby increasing performance.
- Debugging becomes easier.
- Any code referecing a module understands it is a dependency. If the module
file is changed or moved, the problem is immediately obvious.
- Modules (usually) helps eradicating naming conflicts.
- ES6 modules help you organize your code better
*/

// Conclusions

/* 
- ES6 Modules are one of the biggest features in modern browsers.
- Modern JS frameowrks like Vue JS and React JS use this features.
- You should also know that ES6 modules are not supported by all browsers
(the list of suported browsers can be found in the MDN reference above.)
- Becuase not all browsers supprt ES6 modules yet, we have to rely on 
Transpilers which will transpile code from ES6 to ES5 or ES4.
*/

