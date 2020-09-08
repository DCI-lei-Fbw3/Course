//# Variables Excercise

// just instructions

//The Fortune Teller

/* let children = 5; //(N)
let partnersName = "Bruce"; //(Z)
let geographicLoc = "Sweden"; //(Y)
let job_title = "Programmer"; //(X)

console.log(
  "You will be a " +
    job_title +
    " in " +
    geographicLoc +
    " and married to " +
    partnersName +
    " with " +
    children +
    " kids."
);
 */
//## The Age Calculator
/* 
let bYear = 1980;
let fYear = 2050;

let possAge1 = fYear - bYear;

let possAge2 = possAge1--; 

console.log(
  "I will be either " + possAge1 + " or " + possAge2 + " in " + fYear
); */
//console.log(possAge2);

// ## The Lifetime Supply Calculator

/* let age = 30;
let maxAge = 100; 
let snack = 3; 
let restOfLife = maxAge - age;
let Supply = (365 * snack) * restOfLife;

console.log( 
    "You will need " + Supply + " chocolates to last you until the ripe old age of " + maxAge
) */

// ## The Geometrizer

// let radius_cm = 25;
// let circumference_ = 2 * Math.PI * radius_cm;
// console.log(circumference_);
// let area = Math.PI * Math.pow(radius_cm, 2);
// console.log(area);

//## The Temperature Converter

let temp_C = 30;
let C_to_F = (temp_C * 9) / 5 + 32; // (C *9/5) +32 = F
let temp_F = 86; // (F -32) * (5/9) = C
let F_to_C = (temp_F - 32) * (5 / 9);
console.log(temp_C + "C is " + C_to_F + "F");
console.log(temp_F + "F is " + F_to_C + "C");
