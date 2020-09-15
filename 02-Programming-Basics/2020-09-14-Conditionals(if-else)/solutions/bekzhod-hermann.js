// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

/*let number1 = 10;
let number2 = 50;
if ((number1 >= 50 && number1 <= 99) || (number2 >= 50 && number2 <= 99)) {
  console.log("true");
} else {
  console.log("false");
}*/

// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

/*let number1 = 10;
let number2 = 99;
let number3 = 50;
if (
  (number1 >= 50 && number1 <= 99) ||
  (number2 >= 50 && number2 <= 99) ||
  (number3 >= 50 && number3 <= 99)
) {
  console.log("true");
} else {
  console.log("false");
}
*/
// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.

let a = 25;
let b = 35;
let c = 25;
if (a >= b && a >= c) {
  console.log(a);
} else if (b >= a && b >= c) {
  console.log(b);
} else {
  console.log(c);
}

// check conditions
// 10 10 25 ? what happens

// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

let string1 = "Hermann";

// if (string2[0] === "P" && string2[1] === "y")
if (string1.slice(0, 2) === "Py") {
  console.log(string1);
} else {
  console.log("Py" + string1);
}

// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
/*
let nber1 = 32;
let nber2 = 20;
let sum = nber1 + nber2;
if (sum > 50 && sum < 80) {
  console.log(65);
} else {
  console.log(80);
}

include
*/

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
/*
let num1 = 8;
let num2 = 4;
if (num1 + num2 === 8 || num1 - num2 === 8) {
  console.log("true");
} else {
  console.log("false");
}

difference !
*/

// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
/*
let int1 = 10;
let int2 = 1;
if (int1 + int2 === 15 || int1 === 15 || int2 === 15) {
  console.log("true");
} else {
  console.log("false");
}
*/

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
/*
let nber1 = 5;
let nber2 = 11;
if (
  nber1 % 7 === 0 ||
  nber1 % 11 === 0 ||
  nber2 % 7 === 0 ||
  nber2 % 11 === 0
) {
  console.log("true");
} else {
  console.log("false");
}
*/

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
/*
let num1 = 15;
let num2 = 15;
let sum = num1 + num2;
if (num1 === num2) {
  console.log(sum * 3);
} else {
  console.log("they're not the same");
}
*/

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
// Calculez la différence entre un nombre spécifié et 19. Imprimez le double de la différence si le nombre spécifié est supérieur à 19.
/*
let nber1 = 100;
let sum = nber1 - 19;
if (nber1 > 19) {
  console.log(sum * 2);
} else {
  console.log("this num is smaller than 19");
}

check sum
*/

//BONUS CHALLENGE_: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is an adult".
let firstName = "Bekzod";
let age = 28;
if (age < 13) {
  console.log(firstName + "is a child");
} else if (age >= 13 && age < 20) {
  console.log(firstName + " is a teenager");
} else if (age >= 20 && age <= 30) {
  console.log(firstName + " is a young adult");
} else {
  console.log(firstName + " is an adult");
}

// check 30 condition and compare with task


