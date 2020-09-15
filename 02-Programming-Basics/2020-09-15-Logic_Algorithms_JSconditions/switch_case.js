//FbW3: We will look at how Switch Cases work in JS

/* We'd look to use SWITCH statements whenever we 
have multiple test cases for a particular expression.

If you find yourself writing multiple IF/ELSE statements, this may be worth
condensing into a SWITCH statement.

SWITCH statements are more effecient (they consume less computing resources)
*/

/* 
As a  result, in many ways, the SWITCH statement is similar to the IF statement:

- The SWITCH statement firstly evaluates an expression
- Uses CASE syntax, to compare the result of the expression with the particular case
- It then executes any code inside of the CASE untill BREAK keyword is found.- if the BREAK keyword is not added to the case, 
it will continue to execute further code within the block
- Alternatively, if there are no matching cases, it will continue to execute 
further code within the block
*/

// Example:

    const sky = "blue" ;

    switch (sky){
        case "red":
            console.log("It's the end of the world");
            break;
        case "blue":
            console.log("Phew! What a beautiful day");
            break;
        case "green":
            console.log("This can't be real!");
            break;
        default:
            // default does not need a break statement
            console.log("Just another day");
    }

    const sky = "blue" ;

    switch (sky){
        case "red":
        case "blue":
            console.log("Phew! What a beautiful day");
            break;
        case "green":
            console.log("This can't be real!");
            break;
        default:
            console.log("Just another day");
    }

// Let's do the same thing, with if-statement
    const sky = "blue";

    if(sky == "blue") console.log("Phew! What a beautiful day");
    if(sky == "red") console.log("Its the end of the world");
    if(sky == "green") console.log("This can't be real!");
    else console.log("Just another day");

