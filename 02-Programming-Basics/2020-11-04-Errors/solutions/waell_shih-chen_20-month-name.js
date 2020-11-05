// # Debugging Exercises

// #### 2. Month Name
// Create a function called `getMonthName`, which takes the number of the month as an argument (Jan = 1 - Dec = 12). 
// Throw an error if a user inputs an invalid number as an argument.
// * Example
// * getMonthName(15) -> `Invalid Month Number!`

//Method 1:
function getMonth(number) {
if (number>12 || number<1) {
  return "Invalid Month Number!";
  }
else {
enumMonth = {1:"Jan", 2:"Feb", 3:"March", 4:"April", 5:"May", 6:"June", 7:"July", 8:"August", 9:"Sept", 10:"Oct", 11:"Nov", 12:"Dec"};
return enumMonth[number];
}
}
console.log(getMonth(1));
console.log(getMonth(10));
console.log(getMonth(15));

//Method 2:
"use strict"

function getMonth(number){
  switch (number) {
  case 1:
    return "January";
    break;
  case 2:
    return "February";
    break;
  case 3:
     return "March";
    break;
  case 4:
    return "Thursday";
    break;
  case 5:
    return "May";
    break;
  case 6:
    return "June";
    break;
  case 7:
    return "July";
    break;
  case 8:
    return "August";
    break;
   case 9:
    return "September";
    break;
   case 10:
    return "October";
    break;
  case 11:
    return "November";
    break;
  case 12:
    return "December";
    break;
    default:
      return "Invalid Month Number";
      break;
}   
}

console.log(getMonth(1));
console.log(getMonth(10));
console.log(getMonth(15));

//Method 3:
function monthName(n) {
  if (n > 12 || n < 1) {
    return "Invalid Month Number!";
    } else {
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  return monthNames[n-1]
    }
}
console.log(monthName(3))
console.log(monthName(12))
console.log(monthName(16))
