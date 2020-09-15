// Question - 1
​
let determiner = -1;
let x = 20;
​
if (determiner < 0) {
  let x = "less than O";
  console.log(x);
} else {
  if (determiner >= 0) {
    x = "greater or equal to 0";
    console.log(x);
  }
}
​
// Question -2 (error on accessing message variable cuz its a local variable)
​
let updater = 12;
​
if (determiner >= 0) {
  let updater = "greater or equal to 0";
  let message = "positive integer";
  console.log(message);
} else {
  if (determiner < 0) {
    let updater = "less than 0";
    console.log(updater);
  }
}
console.log(message);
​
// Question 3
​
/* Ternary condition is a statement and does not hold the concept of block
whereas if statement exhibits the block concept. Moreover, you use ternary when you are dealing with one true condition */