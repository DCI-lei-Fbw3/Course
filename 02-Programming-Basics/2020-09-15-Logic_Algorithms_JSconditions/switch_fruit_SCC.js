/*The idea is to do the same taks using both if/else statements and switch/cases.

In this exercise, create a program that:
    * Creates a variable that takes its value from a prompt() function
    * The user is able to enter four values only:
        ** apples
        ** bananas
        ** pineapples
        ** mangoes

For each corresponding fruit type, log the following  in the console:

* apples: "Apples are ok."
* bananas: "Bananas are good before and after a football match."
* oranges: "I can eat oranges all day!"
* mangoes: "Did someone say mangoes? Where?"*/

const fruit=prompt("Please choose a fruit from the following: apples, bananas, oranges, mangoes");

switch(fruit) {
    case "apples":
    console.log("Apples are ok.");
    break;
    case "bananas":
    console.log("Bananas are good before and after a football match.");
    break;
    case "oranges":
    console.log("I can eat oranges all day!");
    break;
    case "mangoes":
    console.log("Did someone say mangoes? Where?");
    break;
    default:
    console.log("Nope we do not have the fruits you need!");
    break;
}

const fruits=prompt("Please choose a fruit from the following: apples, bananas, oranges, mangoes");
if (fruits=="apples") {
    console.log("Apples are ok.");
}
if (fruits=="bananas") {
    console.log("Bananas are good before and after a football match.");
}
if (fruits=="mangoes") {
    console.log("Did someone say mangoes? Where?");
}
if (fruits=="oranges") {
    console.log("I can eat oranges all day!");
}
else {
    console.log("Nope we do not have the fruits you need!");
}