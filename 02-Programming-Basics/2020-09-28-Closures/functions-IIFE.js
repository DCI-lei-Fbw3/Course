// A quick overview of Self-Executing Functions

// Self-Executing Functions (or Immediately Invoked Function Expression, IIFE)

//Without parameters and arguments
(function (){

    let name = "taimur";
    console.log(name);
})();


//With a parameter and an argument
(function (name){
    console.log(name);
})("taimur");


/* 
- The function goes in the first parenthesis
- The argument for the self-invoking function goes in the 
second parenthesis
*/
