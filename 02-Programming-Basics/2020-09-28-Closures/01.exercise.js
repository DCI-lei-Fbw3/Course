// ### 1. Addition

// - Write a function `add` that uses a closure that performs 
//addition on arguments in two separate function calls.

// ```javascript
// add(3)(4);
// // returns 7
// ```
// function name(x,y){
//     let result;
//     result= x+y;
//     return result;
// }
// console.log(name(3,4))

function add(x){ 
    let result; 
    return function(y){
        result = x + y; 
        return result; 
    }
}

console.log(add(3)(4))   // --> this would be the normal syntax when trying to call the nested function; 

let first = add(3);
console.log(first(4));

// function added(x){
//     let result;
//     function add2(y){
//         result=x+y
//         return result;
//     }
//     add2(4)
//     return result;
// }
// let one = added(3);
// console.log(one);

/*#### 2. Multiply

- Write a function `multiplier` that uses a closure to perform multiplication. 
However, the outer function should be stored in a variable which is then called. */

 function multiplier(x) {
    let result;
    return function (y) {
        result = x * y;
        return result;
    }
} let multiplier2 = multiplier(2);
console.log(multiplier2(3));


// #### 3. Calculate Money Saved till Pension Day!

// Write a function that accepts several parameters and calculates the number of money that will have been saved as pension 
//until a person retires. 
// The function should be self invoked and should have the following parameters:

function retirement (retirementAge) {
    let savings;
    return function (currentAge, monthlyWage,percentage) { 
        if (currentAge >= retirementAge) {
            return "You're already retired!";
        
    } else savings = ((retirementAge - currentAge) * (monthlyWage * 12)) * (percentage/100);
     return "A lady is " + currentAge + ", she retires at " + retirementAge + ", she earns $" + monthlyWage + " per month and she save the " + percentage + "% of it. She will save $" + savings + " until she retires." ;

    }
}
let sum = retirement(65);
console.log(sum(30,2000,10))
console.log(sum(30,3000,20))

// console.log(retirement(40, 65)(2000, 5)



// - The current age of the person // e.g. 40
// - The retirement age of the person // e.g. 60
// - The monthly wage the person earns // e.g. 1000
// - The percentage (as integer) that the person saves each month // e.g. 10%

// If the person has already retired then the message 'You're already retired!' should be printed.
// If not, then the program should calculate how many years remain until the person retires, 
// the monthly income and take a specific percent of this income every month as saved money.

// - Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. 
// How much money will she have saved until she retires?
// - Output: $30000

