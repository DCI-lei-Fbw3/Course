/* # Return: Math

source: https://edabit.com/collection/XpDvYu8QYboB8v6E5

1. Return the Sum of Two Numbers
Create a function that takes two numbers as arguments and return their sum.*/

function addUp(a, b) {
  let total = a + b;
  return total;
}

console.log(addUp(2, 4));
console.log(".......");

/* 2. Return the Next Number from the Integer Passed
Create a function that takes a number as an argument, increments the number by +1 and returns the result.
*/

function nextInteger(n) {
  if (typeof n != "number") {
    console.log("Please enter an integer!");
  } else {
    n = n + 1;
    return n;
  }
}

console.log(nextInteger(0));
console.log(nextInteger("Pooh"));
console.log(".......");

/* 3. Area of a Triangle
Write a function that takes the base and height of a triangle and return its area.
Note: The area of a triangle is: (base * height) / 2
*/

function areaTriangle(base, height) {
  let area = (base * height) / 2;
  return area;
}

console.log(areaTriangle(19, 22));
console.log(".......");

/* 4. Return the Remainder from Two Numbers
There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

Examples:
```
remainder(1, 3)   ➞  1
remainder(3, 4)   ➞  3
remainder(-9, 45) ➞ -9
remainder(5, 5)   ➞  0
```   
*/

const whatRemainder = function (x, y) {
  let isRemainder = x % y;
  console.log(`The remainder of ${x} divided by ${y} is ${isRemainder}.`);
};

whatRemainder(7, 4);
whatRemainder(11, 5);
console.log(".......");

/* 5. The Farm Problem
In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
- chickens = 2 legs
- cows = 4 legs
- pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

Examples:
```
animals(2, 3, 5) ➞ 36
animals(1, 2, 3) ➞ 22
animals(5, 2, 8) ➞ 50
```
*/

const animals = function (chickLegs, cowLegs, pigLegs) {
  let totalLegs = chickLegs * 2 + cowLegs * 4 + pigLegs * 4;
  console.log(`There are ${totalLegs} animal legs on the farm.`);
};

animals(6, 8, 9);
animals(11, 66, 872);
console.log(".......");

/* 6. Convert Hours and Minutes into Seconds
Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

Bonus: Write a function that takes seconds and converts them to days, hours, minutes, seconds*/

const convertToSeconds = function (hours, minutes) {
      let totalSeconds = hours*60**2+minutes*60;
      console.log(`The total seconds converted from ${hours} hours and ${minutes} minutes are ${totalSeconds} seconds`);
}

convertToSeconds(4, 6);

const convertToDays = function (seconds) {
    let d=Math.floor(seconds/(3600*24));
        let s=seconds;
        s -= d*60*60*24;
    let h=Math.floor(seconds % (60*60*24)/(60*60));
        s -= h*60*60;
    let m=Math.floor(seconds % (60*60)/60);
        s -= m*60;
    
    console.log (`${seconds} seconds is converted into ${d} days ${h} hours ${m} minutes ${s} seconds`);
}

convertToDays (3546544);
convertToDays (436654);
convertToDays (3601);
convertToDays (121);
console.log(".......");

/* 8. Check if an Integer is Divisible By Five
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.*/

const dividedByFive = (aNumber) => {
  aNumber % 5 == 0
    ? console.log(`Hurray! The number ${aNumber} can be divided by 5.`)
    : console.log(`Oops! The number ${aNumber} cannot be divided by 5.`);
};

dividedByFive(7);
dividedByFive(115);
console.log(".......");

/* 9. Multiple of 100
Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.

```
divisible(1)    ➞ false
divisible(1000) ➞ true
divisible(100)  ➞ true
```
*/

const divisibleBy100 = (aNumber) => {
  aNumber % 100 == 0
    ? console.log(`True! ${aNumber} can be divided by 100`)
    : console.log(`False! ${aNumber} cannot be divided by 100`);
};

divisibleBy100(1001);
divisibleBy100(100);
console.log(".......");

/* 10. Is the Number Even or Odd?
Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

Bonus: create two functions `isEven(NUMBER)` and `isOdd(NUMBER)` that return a Boolean.
*/

const isEven = (aNumber) => {
  aNumber % 2 == 0
    ? console.log(`${aNumber} is an even number`)
    : isOdd(aNumber);
};
const isOdd = (aNumber) => {
  aNumber % 2 != 0
    ? console.log(`${aNumber} is an odd number`)
    : isEven(aNumber);
};

isEven(5);
isOdd(18);
console.log(".......");

/* 11. Slice of Pie
Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
1. Total number of slices.
2. Number of recipients.
3. How many slices each person gets.
The function will be in this form:
`equalSlices(total slices, no. recipients, slices each)`

### Examples
```
equalSlices(11, 5, 2)  ➞ true
// 5 people x 2 slices each = 10 slices < 11 slices
equalSlices(11, 5, 3)  ➞ false
// 5 people x 3 slices each = 15 slices > 11 slices

equalSlices(8, 3, 2)   ➞ true
equalSlices(8, 3, 3)   ➞ false
equalSlices(24, 12, 2) ➞ true
```
*/

const equalSlices = (totalSlice, noPeople, sliceEach) => {
  if (noPeople == 0) {
    console.log("Well, no one wants to have the pie....");
  } else {
    if (totalSlice >= noPeople * sliceEach) {
      let leftOver = totalSlice - noPeople * sliceEach;
      leftOver > 0
        ? console.log(
            `We have ${totalSlice} pies for ${noPeople} people with ${sliceEach} pies for each person. We still have ${leftOver} slices of pie left.`
          )
        : console.log(
            `We have ${totalSlice} pies for ${noPeople} people with ${sliceEach} pies for each person. We have no slices of pie left.`
          );
    } else {
      let notEnough = noPeople * sliceEach - totalSlice;
      console.log(
        `We need ${notEnough} pieces of pie more for ${noPeople} people, each of whom takes ${sliceEach} pieces of pie.`
      );
    }
  }

  //if (typeof totalSlice!=="number"|| typeof noPeople!=="number"|| sliceEach!=="number"){
  //    console.log ("Please make sure your enter three positive integers for the function. Try again");
  //}
};

equalSlices(18, 3, 4);
equalSlices(10, 0, 2);
equalSlices(10, 5, 2);
equalSlices(9, 3, 4);
console.log(".......");

/* Notes
- Return (trivially) true if there are zero people.
- It's fine not to use the entire pie.
- All test parameters are integers.
- Don't forget to return the result.
- If you get stuck on a challenge, find help in the Resources tab.
- If you're really stuck, unlock solutions in the Solutions tab.
*/
