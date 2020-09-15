// Question - 1

/* let determiner = -1;
let x = 20;

if (determiner < 0) {
  let x = "less than O";
  console.log(x);
} else {
  if (determiner >= 0) {
    x = "greater or equal to 0";
    console.log(x);
  }
} */

// Question -2 (error on accessing message variable cuz its a local variable)

/* let updater = 12;
determiner = 5;

if (determiner >= 0) {
  let updater = "greater or equal to 0";
  /* var message = "this is with var";  */
/* let message = "positive integer"; 
  console.log(message);
} else {
  if (determiner < 0) {
    let updater = "less than 0";
    console.log(updater);
  }
}
console.log(message);  */

// Question 3

/* Ternary condition is a statement and does not hold the concept of block
whereas if statement exhibits the block concept. Moreover, you use ternary when you are dealing with one true condition */

/* # Switch Cases: Taimur's opinion on some fruits

The idea is to do the same taks using both if/else statements and switch/cases.

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
* mangoes: "Did someone say mangoes? Where?"
 */

/* var fruit = "apples"
 if (fruit == "apples"){
console.log("apples are ok")
}
else{
if(fruit == "bananas"){
console.log("Bananas are good before and after a football match")}
if(fruit == "pineapples"){
console.log("I can eat oranges all day!")}
if(fruit == "mangoes"){
console.log("Did someone say mangoes?")
} 
}
 */

/* var fruit = "apples";
switch (fruit) {
  case "bananas":
    console.log("Bananas are good before and after a football match");
    break;

  case "apples":
    console.log("apples are ok");
    break;

  case "oranges":
    console.log("I can eat oranges all day!");
    break;

  case "mangoes":
    console.log("Did someone say mangoes?");
    break;

  default:
    console.log("try another one");
} */


