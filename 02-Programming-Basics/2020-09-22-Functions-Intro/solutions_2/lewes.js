/*
#### 1. Multiply - Function Declaration
* Create a function that multiples a number by another number.
*/

/***********SOLUTION***************/

function multiy(x) {
    console.log(x * x)
}

multiy(5);
multiy(10);
multiy(50);

/***************************************************************************************************/

/*
#### 2. Multiply - Function Declarations as Values
* Rework the syntax of the above function so that the function declaration is stored as a value.
*/

/***********SOLUTION***************/

/* function multiy(x) {
    var storedValue = x * x;
    console.log(storedValue);
}

multiy(2); */

/***************OR*****************/

const multiys = function (x) {
    var storedValue = x * x;
    console.log(storedValue);
}

multiys(5);

/***************************************************************************************************/

/*
#### 3. Multiply - Arrow Function
* Rework the syntax of the function declaration so that is uses the arrow function shorthand.
*/


//Examples
//const square1 = (x) => { return x*x};
//const square2 = x =>  x*x;

/***********SOLUTION***************/

//const multiy = (x) => { return x * x };
const multiy = x => (x * x);

console.log(multiy(5))

/***************************************************************************************************/

/*
#### 4. Declarations
* Create functions (using all three declarations) to check the remainder of division given two numbers.
*/

/***********SOLUTION***One************/

function div(a, b) {
    var answer = a % b;
    console.log("Solution one = " + answer);
}

div(3, 2);
div(5, 4);
div(10, 9);

/***********SOLUTION***Two************/

const divTwo = function (c, d) {
    var answer = c % d;
    console.log("Solution two = " + answer);
}

divTwo(20, 10);
divTwo(7, 3);
divTwo(11, 4);


/***********SOLUTION****Three***********/

const divThree = (e, f) => { return e % f };
console.log("Solution three = " + divThree(5, 4));
console.log("Solution three = " + divThree(15, 4));
console.log("Solution three = " + divThree(25, 4));

/****************THIS**WON'T**WORK*********************/

/* const divFour = g, h => (g & h);
console.log("Solution Four  = " + divFour(5, 4)); */

/*
You can omit the parenthesis around the parameter,
only (and only if) you have a single parameter
*/