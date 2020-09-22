//Morning FbW3! Let's talk about Functions in javascript

/* 
Some initial thoughts on Functions:
    - Functions are the foundation of JS.
    - Functions can be seen as indvidual programmes, having their own logic
    but connected to the larger logic in general. 
    - Functions allow you to create new vocabulary in JS, without worrying about
    any grammatical rules.
    - Vocabulary of your programme matters.

*/

function makeNoise () {
console.log("Pling!")
};

makeNoise(); // --> call statement

/*
Things we have done so far:

you start a function by using keywords "function"

function _NameofFunction_ (_ParametersGoHere_) { --> start a scope
 .....body of your function

};

callFunctionLikeThis();

 */

 //Another way of wrting functions, is by storing them ins constants
 //However, it does the same in the first method as well.

const makeNoise2 = function() {
    console.log("Pling!");
}

makeNoise2();

//let's create a function that takes a parameter

function square (x) { // <-- (2) goes into the function as a parameter

console.log(x*x);     // <-- (3) the function interprets x = 50

}
square(50); //--> (1) the argument I pass here

function power (base, exponent) {
let  result = 1;
for (let i = 0; i < exponent ; i++) {
    result = result * base;
    }
return result;
}                    //i = 0  1  2  3   
console.log(power(2,4)); //2x 2x x2 x2

/* 
Some functions produce a value, and some don't (that's ok), 
when a function does not produce a value, but an action (such as the console.log in
in the  makeNoise function) then this action is called a "side effect"
*/

// Scope of functions 

const half = function (n) { // this is the local n
    return n/2;
};
let n = 10; // this is the global n

console.log(half(100)); // value returned = 50

console.log(n); // value 10
