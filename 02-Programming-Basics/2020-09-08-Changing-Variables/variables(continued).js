// Hi FbW3: Here we will look a bit further into variables

// Hoisting 
 x = 5;

 console.log(x);

 x = 7;

 console.log(x);

var x;

//Changing Variables

let  a = 5;

a = "test";

let b = 65;


console.log(a + b); // returns 65

  /* Rules of re-assignment    
  1) You can use any operator
  2) You can reassign variables to variables
  3) You can reassing the variables anywhere in your code/script
  */

  
// Type Coercion 
    // Two types of type coercion: 
    // 1) implicit: https://dorey.github.io/JavaScript-Equality-Table/
    // 2) explicit: There 3 types of coversion in JS
                // - to String
                // - to Boolean
                // - to Number

    // changing to String value
    let u = 10; //--> variable declarartion
    u = String(u); //--> type coercion, changing the number value to a string value
    console.log(u);
    typeof(u);

    //Changing to Number value
    let u = "10"; //--> variable declarartion
    u = Number(u); //--> type coercion, changing the number value to a string value
    console.log(u);
    typeof(u);

    /* 
    Implicit conversion is tricky, because it's triggered in more cases:
    - comparison operators 
    - bitwise operators
    - arithmetic operators 
    */