
/*1. Updater

Depending on the value of a variable (determiner), assign a value to x.
If determiner is less than 0, x's value should be "Less than 0"
If determiner is greater or equal 0, x's value should "Greater or equal to 0".*/

var x = 3;
if (x<0) {
    x="Less than 0";
    console.log(x);
}
else {
    x="Greater or equal to 0"
    console.log(x);
}

/*2. New Variables

* Depending on the value of the determiner, assign a value to another variable (updater) and create another variable.

a. If determiner is greater of equal to 0, updater's value should be "Greater or equal to 0" and create another variable called message, assign a value of "Positive Integer" and print message.

b. If determiner is less than 0, updater's value should be "Less than 0".

* Question: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.*/
var x = -1;
if (x>=0) {
    x="Greater or equal to 0";
    let message="Positive Interger"; 
    console.log(message);
}
else {
    x="Less than 0"
    message="Negative Integer";
    console.log("This is inside the scope,", x);   
}

console.log("The number outside of the scope is", x);
//when using console.log to print out a message of x, x will be the most updated variable.

/*3. Ternary v.s. If statement

* When do you use a ternary v.s. an if statement? Give an example.*/

let y=7;
y==7? console.log("Yes, the number is 7 using ternary."):console.log("No, the number is anything but 7");

y=10;
if (y==7) {
    console.log("Yes, the number is 7 using if and else block.");
}
else if (y>7) {
    console.log("The number has been updated to a number larger than 7, which is", String(y));
}
else {
    console.log("The number has been updated to a number smaller than 7");
}
//Ternary is used more either/or, yes/no, whereas if and else is used when there is more than 2 options to examine.