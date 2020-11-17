// source:
// https://eloquentjavascript.net/08_error.html

function canYouSpotTheProblem() {
    "use strict";
    // declaring a variable => requires "let"
    for (counter = 0; counter < 10; counter++) {
    // for (let counter = 0; counter < 10; counter++) { // <- that is the fix
        console.log("Happy happy");
    }
}


canYouSpotTheProblem();
// → ReferenceError: counter is not defined

/*
without
    "use strict";
the interpreter would create a globally scoped variable.

"use strict"; forces to declare a new varialble with "let"

*/
