
// const FUNCTION_NAME = function(PARAMETER) {
//     FUNCTION_BODY
// };

const square = function(x) {
    return x * x ;
};

console.log(square(3));

const greet = function(firstname, surname) {
    console.log("hi", firstname, surname);
};

greet("Thomas", "Hofmann");
greet("M.", "H.");

console.log("show what greet() does, when calling without providing arguments:");
greet();

const createGreeting = function(firstname, surname) {
    return "Hi " + firstname + " " + surname;
}

greeting = createGreeting("T.", "K.");
console.log(greeting);

const counting = function() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
};

counting();

let pow = function(x, y) {
    a = x ** y;
    return a;
};

console.log("pow: ");
console.log(pow(3, 2));

let output = pow(4, 2);
console.log(output);
