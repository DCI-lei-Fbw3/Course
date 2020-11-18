// # Programming Basics: Conditionals

// These exercises are aimed at making you more comfortable with using conditionals as well as operators. Use "if" statements to complete the following exercises. Print your results to the console.

// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

let integerA = 57
let integerB = 84

if ((integerA <= 99 && integerA >= 50) || (integerB <= 99 && integerB >= 50)) {
  console.log(true)
} else {
  console.log(false)
}

// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

let integer1 = 12
let integer2 = 89
let integer3 = 75

if (
  (integer1 <= 99 && integer1 >= 50) ||
  (integer2 <= 99 && integer2 >= 50) ||
  (integer3 <= 99 && integer3 >= 50)
) {
  console.log(true)
}

// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.

let a = 2
let b = 13
let c = 5

if (a > b && a > c) {
  console.log(a)
}
if (b > a && b > c) {
  console.log(b)
}
if (c > b && c > a) {
  console.log(c)
}

// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
// 4. If a given string begins with "Py" then print it. If it doesn't, add "Py" in front of it.

let text = 'JavaScript is a great thing'
if (text.startsWith('Py')) {
  console.log(text)
} else {
  console.log('Py ' + text)
}

// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.

// 1. Define two integers
// 2. add them together and put it in a variable
// 3. two conditions: >= 50 and <= 80  -- > console log 65 / else console log 80

let x = 50
let y = 10
let sumNum = x + y
if (sumNum >= 50 && sumNum <= 80) {
  console.log(65)
} else {
  console.log(80)
}

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

let firstNum = 5
let secondNum = 13
let sumNum2 = firstNum + secondNum
let difference = Math.abs(firstNum - secondNum) // finds the difference between two numbers regardless of which comes first

if (sumNum2 === 8 || difference === 8) {
  console.log(true)
} else {
  console.log(false)
}

// Sometimes negative numbers are useful

let budget = 400
let spending = 435
let leftoverCash = budget - spending
console.log(leftoverCash)

// Default is ===, use == only when converting between types

// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.

let num1 = 5
let num2 = 10
let result = num1 + num2

if (num1 === 15 || num2 === 15 || result === 15) {
  console.log(true)
} else {
  console.log(false)
}

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let int1 = 15
let int2 = 33

if (int1 % 7 === 0 || int1 % 11 === 0 || int2 % 7 === 0 || int2 % 11 === 0) {
  console.log(true)
}

if (0 === int1 % 7 || int1 % 11 || int2 % 7 || int2 % 11) {
  console.log('It works')
}

if (0 === (int1 || int2) % 7 || (int1 || int2) % 11) {
  console.log('It works AGAIN!')
}

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

let value1 = 11
let value2 = 11
// let value3 = parseInt(value2) //parseInt makes sure our string is read as a number if value2 were entered as a string
let result9 = value1 + value2

if (value1 === value2) {
  console.log(result9 * 3)
}

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

let specNum = 22
let nineteen = 19
let resultDiff = specNum - nineteen

if (specNum > 19) {
  console.log(resultDiff * 2)
}

// _BONUS CHALLENGE_: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".

// BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc.
