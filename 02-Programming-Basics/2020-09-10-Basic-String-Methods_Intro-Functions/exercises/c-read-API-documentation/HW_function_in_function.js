/*let a = "Hello World!";
function first () {
    console.log("Inside first function");
    second();
    console.log("Again inside first function");
}

function second () {
    console.log ("Inside second function");
    first ();
    console.log ("Inside Global Execution Context");
}*/

/*if (""){
    console.log(1 + " is true")
} else {
    console.log(0 + " is false")
}

let flag1 = false;
let flag2 = false;
let flag3 = true;

if (flag1){
    console.log("this will not print");
} else {
    if (flag2){
        console.log("This will also not print");
    } else {
        if (flag3) {
        console.log("This will print! Hurray!");
        }
    }
}*/

/*
var eName=prompt("Employee's Name", "Name");
var SSN=prompt("The security social security number is: ");
var rPay=prompt("What is the rate of pay? Please type in integer: ");
var nHours=prompt("What is the number of the hours o works? Please type in integer: ");

if (nHours>40){
    total=(nHours-40)*1.5+nHours*rPay;    
}
if (nHours<=40){
    total=nHours*rPay;    
}
console.log(eName, "gets", String(total), "dollars this week,", "the security number is", SSN + ".");
*/

var a = Math.floor(Math.random() * 100);
var b = Math.floor(Math.random() * 100);

/* if (a >= 50 && b >= 50 && a <= 99 && b <= 99) {
  console.log(a, b);
  console.log("This status is true.");
} else {
  console.log(a, b);
  console.log("Out of range between 50 and 99!");
} */

/* if (a >= 50 && b >= 50 && a <= 99 && b <= 99) {
  console.log(a);
  console.log(b);
  console.log("thats true");
} else {
  console.log("its wrong");
} */

// Question -2
/* var a = Math.floor(Math.random() * 100);
var b = Math.floor(Math.random() * 100);
var c = Math.floor(Math.random() * 100);

if (a >= 50 || b >= 50 || c >=50 && a <= 99 || b <= 99 ||c <=99) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log("thats true");
  } else {
    console.log("its wrong");
  } */

// Question 3

/* var a = 10;
var b = 50;
var c = 55;

if (a > b && a > c) {
  console.log("false, a is not the largest");
}
if (b > a && b > c) {
  console.log("True, because 20 is bigger than 5 or 10");
}
if (c > a && c > b) {
  console.log("correct!");
  console.log(Math.max(a, b, c));
} */

//Question 4

/* var a = "Hi, we are doing alright ";
var b = "Py" + a;

if (b[0] == "P" && b[1] == "y") {
  console.log(a);
} else {
  console.log(b);
} */

//Question 5

/* var a = Math.floor(Math.random() * 50);
var b = Math.floor(Math.random() * 25);

if (a + b >= 50 && a + b <= 80) {
  console.log(a, b);
  console.log("65");
} else {
  console.log(a, b);
  console.log("80");
} */

//Question 6

/* var a = Math.abs(Math.floor(Math.random() * 50));
var b = Math.abs(Math.floor(Math.random() * 25)); 

if (a + b === 8 || a - b === 8) {
  console.log(a, b);
  console.log("true");
} else {
  console.log(a, b);
  console.log("false");
} */

//Question 7

/* var a = Math.abs(Math.floor(Math.random() * 20));
var b = Math.abs(Math.floor(Math.random() * 20));

if (a === 15 || b === 15 || a + b === 15) {
  console.log(a, b);
  console.log("true");
} else {
  console.log(a, b);
  console.log("false");
}
 */

//Question 8

/* var a = Math.abs(Math.floor(Math.random() * 20));
var b = Math.abs(Math.floor(Math.random() * 20));

if ((a % 7 === 0 || a%11===0) ||a (b % 7 === 0 || b%11===0)) {
  console.log(a, b);
  console.log("true");
} else {
  console.log(a, b);
  console.log("false");
} */

//Question 9

/* var a = Math.abs(Math.floor(Math.random() * 10));
var b = Math.abs(Math.floor(Math.random() * 10));

if (a === b) {
  console.log(a, b);
  console.log(3 * (a + b));
} else {
  console.log(a, b);
  console.log("just chill");
} */

//Question 10

/* var a = 30;
var b = 19;

if (a > b) {
  console.log(2 * (a - b));
} else {
  console.log("this question is very vague");
} */

//Bonus

var f_name = "ShihSaad";
var age = 11;
if (age < 13) {
  console.log(f_name, "is a child!");
} else if (age >= 13 && age < 20) {
  console.log(f_name, "is a teenager!");
} else if (age >= 20 && age < 30) {
  console.log(f_name, "is a young adult!");
} else {
  console.log(f_name, "is an adult!");
}
/* if (age >= 13 && age < 20) {
    console.log(f_name, "is a teenager!");
  }

  if (age >= 20 && age < 30) {
    console.log(f_name, "is a young adult!");
  } else {
    console.log(f_name, "is an adult!");
  }
} */











