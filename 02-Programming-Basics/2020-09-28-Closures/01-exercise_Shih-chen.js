/*# Closures

#### 1. Addition

- Write a function `add` that uses a closure that performs addition on arguments in two separate function calls.

```javascript
add(3)(4);
// returns 7
```
*/
function addUp1(x1) {
    return function(y1) {
      console.log(x1 + y1);
    };
}//This one does not include a closure, so this resolves the issue but not delivers the task.

addUp1(3)(4);

function addUp2(x2) {
    function innerNum(y2) {
    return x2 + y2;
    };
return innerNum;
}

console.log(addUp2(13)(14));

/*#### 2. Multiply

- Write a function `multiplier` that uses a closure to perform multiplication. However, the outer function should be stored in a variable which is then called.
*/
function multiplier1(x3) { 
    return function innerNumber(y3) {
     console.log(x3*y3);               
    }   
}//This one does not include a closure, so this resolves the issue but not delivers the task.

multiplier1(3)(4);

function multiplier2(x4) { 
    function innerNumber(y4) {
     return x4*y4;               
    }
 return innerNumber;   
}

console.log(multiplier2(13)(14));

/*#### 3. Calculate Money Saved till Pension Day!

Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:

- The current age of the person // e.g. 40
- The retirement age of the person // e.g. 60
- The monthly wage the person earns // e.g. 1000
- The percentage (as integer) that the person saves each month // e.g. 10%

If the person has already retired then the message 'You're already retired!' should be printed.
If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.

- Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
- Output: $30000
*/
function Age(currentAge, retiredAge) {
        let totalYears=retiredAge-currentAge;
        //return totalYears;
        (totalYears<=0)? console.log("You are already retired."): console.log("Not retired yet");
        
    function Pension(monthlyWage, percentage) {
        let money=monthlyWage*(percentage)/100*totalYears;
        return money;        
    }    
return Pension; 
}

console.log(Age(300, 65)(2000, 5));

/*bonus exercise: Anonymous functions all the way
Create a function which takes a parameter n and returns a function such that it, 
when called n times, returns the string "DCI".

Examples
lambdaDepth(0) ➞ "dci", lambdaDepth(1)() ➞ "dci", lambdaDepth(2)()() ➞ "dci", typeof lambdaDepth(2)() ➞ "function"

Notes
num will always be a non-negative integer.
If num == 0, return "edabit". If num > 0, return a function.
All non-example test cases come in two forms: 
checking whether 5.5.5.5. lambda_depth(k), after being called k times, 
returns a string, and 6. checking whether lambda_depth(k) returns a function.
*/

function lambdaDepth(num) {
    (num==0||num<0)? console.log("edabit"): ()=>lambdaDepth(num-1);
}
//lambdaDepth(3);


function Age(currentAge, retiredAge) {
    let totalYears=retiredAge-currentAge;
    //return totalYears;
    (totalYears<=0)? console.log("You are already retired."): console.log("Not to the retirement age yet.");
    const Pension = (monthlyWage, percentage)=> {
        let money=monthlyWage*(percentage)/100*totalYears;
        if (money>0) {
            return money;
        }
        else {
            return null;
        }           
    }  
return Pension; 
}

console.log(Age(300, 65)(2000, 5));