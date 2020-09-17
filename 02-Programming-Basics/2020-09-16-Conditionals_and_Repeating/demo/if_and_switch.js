if (true) {
    console.log("do something");
}

let x = 5;

console.log("with ternary operator:")
console.log( x < 5? "x is less than 5" : "x is not less than 5");

console.log("equivalent with if-statement")
if ( x < 5 ) {
    console.log("x is less than 5");
} else {
    console.log("x is not less than 5");
}

console.log("if, else if, else:")
if ( x < 5 ) {
    console.log("x is less than 5");
} else if ( x == 5 ) {
    console.log("x equals 5");
} else if ( x == 6 ) { // test for equals 6
    console.log("x is equal to 6");
} else { // DEFAULT
    console.log("x is greater than 6");
}

console.log("switch:");
switch (x) {
    case 5:
        console.log("x equals 5");
        break;
    case 6:
        console.log("x equals 6");
        break;
    default:
        console.log("x is neither 5 nor 6");
        break;
}

console.log("switching on strings");

name = "Carl";

switch (name) {
    case "Sophie":
        console.log("hi", name);
        break;
    default:
        console.log("hello", name);
        break;
}

console.log("switching on comparisons:");
//x = "a string";
switch (true) {
    case ( x < 5 ):
        console.log("x is less than 5");
        break;
    case ( x == 6 ):
        console.log("x equals 6");
        break;
    default:
        console.log("default hit");
        break;
}

