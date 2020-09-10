// function greet(name) {
//     console.log("Hello", name);
// }

//greet("World");

//console.log("bye");

/*

Execution Phase (after interpretation);

1-5 not in function
6       in greet
3           in console.log
4       in greet, but just about to leave
7   not in function
8       console.log
9   not in function

*/

greetByFullname("Thomas", "Hofmann");

function greetByFullname(firstname, lastname) {
    let fullname = createFullname(firstname, lastname);
    greet(fullname); // => like greet(name=fullname)
}

function createFullname(firstname, lastname) {
    return firstname + " " + lastname;
}

function greet(name) {
    console.log("Hello", name);
}

// ***************************************************
function multiply(a, b, c, d) {
    let result = a * b;
}

function add(w, x, y, z) {
    let result = x + y;
    //multiply(a, b, c, d); // not working
    multiply(w, x, y, z); // working
}

add(1, 2, 3, 4);
