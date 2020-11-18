// Hi FbW3! Today we will look into if statements

//Using Conditional Ternary Operators

        let voteable = (age  <  18) ? "Too young to vote" : " VOTE VOTE VOTE!";

//declaration of "if" statements

        //whatever you put in the parenthesis, is checked to be true

        if (age < 18){
            console.log("Too young to vote");
        }
        if (age >= 18){
            console.log(" VOTE VOTE VOTE!");
        }


        /* Three things to watch out for when creating a conditional logic:
        1) So make sure that the comparable values are actually able to be compared
        2) You should pick the correct comparison operator for your comparison logic
        3) Create a logic of what happens "if" something is true

        */


        /* 

        List of Conditional Operators
        
        Operator	    Meaning	            True expressions
        ==	            Equality	        myFavoriteNumber == 28 
                                            myFavoriteNumber == '28' 
                                            28 == '28'

        ===	            Strict equality	    myFavoriteNumber === 28

        !=	            Inequality	        myFavoriteNumber != 29


        !==	            Strict inequality   myFavoriteNumber !== '28' 
                                            28 !== '28'
        >	            Greater than	    myFavoriteNumber > 25 
                                            '28' > 25
        >=	          Greater than or equal myFavoriteNumber >= 28
                                            '28' >= 25
        <	            Less than	        myFavoriteNumber < 30 
                                            '28' < 30
        <=	            Less than or equal	myFavoriteNumber <= 28 
                                            '28' <= 28 */

        let trueFlag = true;
        let falseFlag = false;

        if (trueFlag) {
            console.log('This will print!');
        }
        if (falseFlag){
            console.log('This will not print!');

        }

// else 

            if(/*condition*/){
                // run this if condition is true
            } else {
                // run this if condition is false
            }

            // Taimur's logic: only use "else" statements to throw an error, (if > switch)

            // SIDENOTE: ANYTHING IN JS THAT IS WITHIN {} (CALLED CURLY BRACES) ARE 
            // REFERRED TO AS A BLOCK OF CODE


// "Truthy" vs. "Falsey"
        // Is relevant when you don't explicitly use True or False variables
        // A value that coerces to TRUE is referred to as "truthy". One that coerces to FALSE is "falsey"

       /*  The following values are "falsey" and will coerce to FALSE, meaning
       the code in the if-statement won't run:

            - false
            - null
            - undefined
            - '' or "" (empty, 0-length string)
            - 0 (the number 0)
            - NaN 

        All other values are truthy. This means that all numbers except 0 and NaN,
        and all string values that are not empty are truthy.
            */

        let itemToTest = true;
        // the condition does not always have to be with a conditional operator

        if (itemToTest){
            console.log(itemToTest + " is true")
        } else {
            console.log(itemToTest + " is false")
        }

// No Curly braces

        let trueFlag = true;
        if(trueFlag) console.log("This is TRUE!");
        else console.log('This will print if FALSE');

        // If we write code in a block using {}, that entire block is the item
        // If we write code without brackets, the statement will run only the next line of code it sees

//Chaining if-else statements (nesting)

        /*
        We can write complex conditional logic using the values we've looked at so far,
        because the else-block only runs then next item it sees after the condition.

        We can also nest <--(keyword) IF statements within other IF statements, or
        ELSE statements
        */

        let flag1 = false;
        let flag2 = false;
        let flag3 = true;

        if (flag1){
            console.log("this will not print");
        } else {
            if (flag2){
                console.log("This will also not print");
            } else {
                if (flag3) {
                console.log("This will print! Hurray!");
                }
            }
        }


        // This code is really not pretty, let's try again

        // JS also recognises ELSE IF

        let flag1 = false;
        let flag2 = false;
        let flag3 = true;

        if (flag1){
            console.log("this will not print");
        } else if (flag2){
                console.log("This will also not print");
            } else if (flag3) {
                console.log("This will print! Hurray!");
                }
            


        // Can be cleaned fruther, by removing brackets
        // These are called single-line statements

        let flag1 = false;
        let flag2 = false;
        let flag3 = true;

        if (flag1) console.log("this will not print");
        else if (flag2) console.log("This will also not print");
        else if (flag3) console.log("This will print! Hurray!");
    
//<<-------------END---------------------------------------->>
        // Hermann's example
        
    // Always make sure to check one condition per statement
    
    let var1 = 5;
    let var2 = 10;
    if(var1 === var2){

        console.log("they have the same value and the same type");
        
        // unreachable code
        if(var1 > var2){
            console.log("the first variable is greater than the second")
        } else if(var1 < var2){
            console.log("the second variable is greater than the first")
        }

    }

//_____________WARM UP EXERCISE_______________//

    /* [if-else] Write a JavaScript program that prompts for an employee name, 
    SSN, rate of pay, and hours worked, and computes the total pay for the employee. 
    If the hours worked is greater than 40, use one and the half (x1.5) for overtime rate 
    (for hours beyond 40) and compute accordingly.

HINT: var name = prompt("Employee's Name", "Name"); //prompt() function allows you to open a prompt box in the browser

 */

//Taimur's solution:

//program that prompts for:
// employee name
var name = prompt("Employee's Name", "Name"); //anything after a comma in a prompt function, is the placeholder in the input field
// employee's SSN
var ssn = prompt("Social Security Number for " + name, "000-00-0000");
// employee's wage
var wage= prompt("Hourly wage for" + name, "5.25");
// number of hours worked
var hours = prompt("How many hours did" + name + " work?", "40");
//to calculate the wage
var total;
//IF emplyee worked less than or equal 40 hours
if (hours <= 40)
    total = hours * wage;
//  IF the hours worked is greater than 40, use one and the half (x1.5) for overtime rate 
// (for hours beyond 40) and compute accordingly.
else
	total = (40 * wage) + (hours - 40) * wage * 1.5;

console.log(total);

//https://repl.it/languages/nodejs --> live node environment without need to set up