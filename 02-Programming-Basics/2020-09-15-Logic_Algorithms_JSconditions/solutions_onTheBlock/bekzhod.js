// 1. Updater
/*Depending on the value of a variable (determiner), assign a value to x.
If determiner is less than 0, x's value should be "Less than 0"
If determiner is greater or equal 0, x's value should "Greater or equal to 0".*/

let x = 8;

if (x < 0) {
  console.log((x = "Less than zero"));
} else {
  console.log((x = "greater or equal to 0"));
}

/*2. New Variables

* Depending on the value of the determiner, assign a value to another variable (updater) and create another variable.*/

let a = 5;

if (a >= 0) {
  console.log((a = "greater than or equal to 0"));
  let message = "Positive integer";
} else if (a < 0) {
  console.log((a = "Less than 0"));
}
console.log(message);  --> message is not defined

/*3. Ternary v.s. If statement

* When do you use a ternary v.s. an if statement? Give an example.*/

let age = 17

console.log(age >= 18 ? "good to go" : "let me call your dad") ---> /*Ternary asks two conditional questions (true or false)*/


if ( age >= 18) {
    console.log("good to go")
}else if ( age <= 17 ) {
    console.log("I'm calling your dady")
}else if ( age < 14 ) {
    console.log("Kid, I'm calling police")   --->
     /*IF statement can have lot's of conditional questions and outcome scenarios *?
}


