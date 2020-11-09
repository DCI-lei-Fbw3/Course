//# Declaring Functions

//#### 1. Multiply - Function Declaration
//* Create a function that multiples a number by another number.
function toMultiply1 (a, b) {
    c=a*b;
    return c;
    //console.log(c);
    }
console.log(toMultiply1(4, 5));

//#### 2. Multiply - Function Declarations as Values
//* Rework the syntax of the above function so that the function declaration is stored as a value.

const toMultiply2 = function (a, b) {
        c=a*b;
        console.log(c);
    }
toMultiply2(40, 50);

//#### 3. Multiply - Arrow Function
//* Rework the syntax of the function declaration so that is uses the arrow function shorthand.
const toMultiply3 = (a, b) => {
    c=a*b;
    //return c;
    console.log(c);
    }
toMultiply3(400, 500);

//#### 4. Declarations
//* Create functions (using all three declarations) to check the remainder of division given two numbers.

const checkRemainder1 = function (x, y) {
    z=x%y;
    console.log(z);
    }
checkRemainder1(10, 3);

const checkRemainder2 = (x, y) => {
    z=x%y; 
    console.log(z);
    }
checkRemainder2(100, 30);

function checkRemainder3 (x, y) {
    z=x%y;
    console.log(z);
    }
checkRemainder3(1000, 300);