// source:
// https://eloquentjavascript.net/08_error.html

function canYouSpotTheProblem() {
    "use strict";
    for (counter = 0; counter < 10; counter++) {
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
