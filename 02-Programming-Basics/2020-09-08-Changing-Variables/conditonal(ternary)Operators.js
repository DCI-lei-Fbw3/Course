// Here we take a look at creating conditions using ternary operators

variablename = (condition) ? value1:value2

/* 
here's what you need to know:
1) The condition is what you're actually testing. 
The result of your condition should be true or false or at least coerce to
either boolean value.
2) A '?' seperates our conditional from our true value (value1). Anything between
the '?'  and the ':' is what is executed if the condition evaluates to true 
3) Finally, a ':' colon. If your coditional evaluates to false, 
any code after the colon is executed. 

*/

// is doing the exact same thing as:

if (condition) {
    value is true;
} else{
    value is false
}

let voteable = (age  <  18) ? "Too young to vote" : " VOTE VOTE VOTE!"

// You can breakdown the conditonal evulation into multiple steps as below:

//If student, give discount

let isStudentBool = true;

let price = isStudentBool ? 5:10 ;

// You can nest ternary operators to test multiple conditions

let isStudentBool = false;
let isSeniorBool = true;

let price = isStudentBool ? 5: isSeniorBool ? 3 : 10 ;              