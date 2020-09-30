#### 1. Addition
- Write a function `add` that uses a closure that performs addition on arguments in two separate function calls.
```javascript
add(3)(4);
// returns 7
``` */
//Addition
/* const add = (num1) => {
    const add2 = (num2) => {
        return num1 + num2;
        };
return add2;
};
console.log(add(3)(4));
 */
/* function add(num1){
    function add2 (num2){
        return num1 + num2;
    };
return add2;
};
console.log(add(3)(4)); */
//2
/* ## 2. Return the Next Number from the Integer Passed
Create a function that takes a number as an argument, increments the number by +1 and returns the result. */
/* const increase = (num) => num + 1; */
/* function increase(num){
    num + 1;
};
console.log(increase(2));
//!Multiply
const multi = (x) => {
    const innerFunc = (y) => {
        return x * y;
        };
return innerFunc;
};
let doMulti = multi(5);
console.log(doMulti(6));
 */
/* function multi(x){
    function innerFunc(y){
        return x * y;
    };
return innerFunc;
};
let doMulti = multi(5);
console.log(doMulti(6)); */
/* #### 3. Calculate Money Saved till Pension Day!
Write a function that accepts several parameters and calculates the
number of money that will have been saved as pension until a person retires.
 The function should be self invoked and should have the following parameters:
- The current age of the person // e.g. 40
- The retirement age of the person // e.g. 60
- The monthly wage the person earns // e.g. 1000
- The percentage (as integer) that the person saves each month // e.g. 10%
If the person has already retired then the message 'You're already retired!'
should be printed.
If not, then the program should calculate how many years remain until the person
retires, the monthly income and take a specific percent of this income every month as saved money.
- Example: A lady is 40 years old, she retires at 65, she earns $2000 per month
and she saves the 5% of it. How much money will she have saved until she retires?
- Output: $30000
 */
 (function calculate(age, retirementAge){
    if (age >= retirementAge) {
        return "You're already retired!"
    } else {
        function howManyYears(yearsToGo, monthlyIncome, percentage){
            var yearsToGo = retirementAge - age;
            function percentage(percentage, monthlyIncome){
                return (100 * per)
            }
        }
    }
 } );