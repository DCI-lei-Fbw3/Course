/*# Switch Cases: Taimur's opinion on some fruits
​
The idea is to do the same task using both if/else statements and switch/cases.
​
In this exercise, create a program that:
    * Creates a variable that takes its value from a prompt() function
    * The user is able to enter four values only:
        ** apples
        ** bananas
        ** oranges
        ** mangoes
​
For each corresponding fruit type, log the following  in the console:
​
* apples: "Apples are ok."
* bananas: "Bananas are good before and after a football match."
* oranges: "I can eat oranges all day!"
* mangoes: "Did someone say mangoes? Where?"*/
​
/*Incorrect one*/
/*const fruit1 = "apples";
const fruit2 = "bananas";
const fruit3 = "oranges";
const fruit4 = "mangoes";
​
if (fruit1 == "apples") console.log("Apples are ok");
if (fruit2 == "bananas")
  console.log("Bananas are good before and after a football match.");
if (fruit3 == "oranges") console.log("I can eat oranges all day!");
else console.log("Did someone say mangoes? Where?");*/
​
/* Correct one*/
var fruits = prompt(" Enter your fruit here");
switch (fruits) {
  case "apples":
    console.log("apples are ok");
    break;
  case "bananas":
    console.log("Bananas are good before and after a football match");
    break;
  case "oranges":
    console.log(" I can eat oranges all day!");
    break;
  case "mangoes":
    console.log("Did someone say mangoes? Where?");
    break;
}
​
/*Taimur's
var fruitInput = prompt(
  "Please enter either apples, oranges, bananas, or mangoes"
);
​
switch (fruitInput) {
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
    // default does not need a break statement
    console.log("Please enter a valid fruit");
}*/

















