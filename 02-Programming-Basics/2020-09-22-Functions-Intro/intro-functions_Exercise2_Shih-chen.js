/*# Declaring Functions 

#### 1. Multiply - Function Declaration
* Create a function that multiples a number by another number.*/

function m1(x, y) {
    return x*y;
}

console.log(m1(8, 9));

/*#### 2. Multiply - Function Declarations as Values
* Rework the syntax of the above function so that the function declaration is stored as a value.*/

const m2 = function (x, y) {
    return x*y;
}

console.log(m2(8, 9));

/*#### 3. Multiply - Arrow Function
* Rework the syntax of the function declaration so that is uses the arrow function shorthand.*/

const m3 = (x, y) => {
    return x*y;
}

console.log(m3(8, 9));

/*#### 4. Declarations
* Create functions (using all three declarations) to check the remainder of division given two numbers.*/ 
function c1(x, y) {
    let remainder = x%y;
    console.log(remainder);
}

const c2 = function (x, y) {
    let remainder = x%y;
    console.log(remainder);
}

const c3 = (x, y) =>{
    let remainder = x%y;
    console.log(remainder);
}

c1 (3, 4);
c2 (5, 6);
c3 (8, 9);