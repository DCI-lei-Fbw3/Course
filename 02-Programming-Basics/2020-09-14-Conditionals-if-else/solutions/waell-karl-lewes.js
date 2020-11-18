//1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let intOne = 25;
let intTwo = 40;
if (intOne >= 50 && intOne <= 99 || intTwo >= 50 && intTwo <= 99) {
    console.log("TRUE")
} else {
    console.log("FALSE")
}
//2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let intThree = 41;
let intFour = 76;
let intFive = 100;
if (intThree >= 50 && intThree <= 99 || intFour >= 50 && intFour <= 99  || intFive >= 50 && intFive <= 99 ) {
console.log("TRUE")
} else {
    console.log("FALSE")
}
/* 3. Declare the variables a, b and c, and give them number values.
Check which one out of the three variables has the largest value and print it to the console.
Then change the values of the variables to see if your conditional still works. */
let a = 1000;
let b = 200;
let c = 50;
if (a > b && a > c) {
    console.log("'a' has the greatest value")
} else if ( b > a && b > c) {
    console.log("'b' has the greatest value")
} else if ( c > a && c > b ) {
    console.log("'c' has the greatest value")
}
//4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
let newString = "Python";
if ( newString.startsWith("Py")) {
    console.log(newString)
} else console.log("FALSE")
// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
let x = 70;
let y = 50;
if (x + y >= 50 && x + y <= 80 ) {
 console.log("65")
} else console.log("80")
// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
let firstOne = 12;
let secondOne = 4;
if (firstOne + secondOne  == 8 || firstOne - secondOne == 8) {
    console.log("TRUE")
} else
console.log("FALSE")
// 7 Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
let thirdOne = 15;
let forthOne = 15;
if (thirdOne == 15 || forthOne == 15 || thirdOne + forthOne == 15) {
    console.log("TRUE")
} else
    console.log("FALSE")
//8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let fifthOne = 22;
let sixthOne = 8;
if (fifthOne % 7 == 0 || fifthOne % 11 == 0 || sixthOne % 7 == 0 || sixthOne % 11 == 0) {
    console.log("TRUE")
} else
console.log("FALSE")
// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
let seventhOne = 20;
let eighthOne = 30;
if(seventhOne == eighthOne) {
    console.log((seventhOne + eighthOne) * 3)
} else (
    console.log(seventhOne + eighthOne)
)
// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let ninthOne = 50;
if((ninthOne - 19) > 19) {
    console.log((ninthOne - 19) * 2)
} else
console.log("f**k off")
//BONUS
let firstName = "peter";
let age = 30;
if(age < 13) {
    console.log( firstName + " is a child." )
}  else if (age >= 13 && age < 20){
    console.log(firstName + " is a teenager.")
}  else if (age >= 20 && age < 30){
    console.log(firstName + " is a young adult")
}  else
console.log(firstName + " is an adult.")