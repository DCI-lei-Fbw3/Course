/* ## 1. Return the Sum of Two Numbers

 Create a function that takes two numbers as arguments and return their sum.*/

 function sum(x, y){ 
     return x + y 
    }

console.log(sum(2, 5))

// ## 2. Return the Next Number from the Integer Passed

// Create a function that takes a number as an argument, increments the number 
//by +1 and returns the result.

function increNumber(a){
    a++;
    return a;
}
console.log(increNumber(10))

// ## 3. Area of a Triangle

// Write a function that takes the base and height of a triangle and return its area.

// Note: The area of a triangle is: (base * height) / 2

const TriangleArea = (base, height) => {
    return (base * height) / 2
}

console.log(TriangleArea(3, 5))

// ## 4. Return the Remainder from Two Numbers

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
//Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, 
//possibly zero. Return that value.

// Examples:
// ```
// remainder(1, 3)   ➞  1
// remainder(3, 4)   ➞  3
// remainder(-9, 45) ➞ -9
// remainder(5, 5)   ➞  0
// ```

const remainder = function(a,b){
    //let result=a%b;
    return a%b;
}
console.log(remainder(-9,45))

// ## 5. The Farm Problem

// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. T
//he farmer breeds three species:

// - chickens = 2 legs
// - cows = 4 legs
// - pigs = 4 legs

// const FarmProblem = (chickens, cows, pigs) => {
//          if (chickens===undefined) {
//         return "Invalid Input"
//     }
    
//     else if (!cows && !pigs) {
//         return chickens * 2  
//     } 
//     else if (!pigs) {
//         return (chickens * 2) + (cows * 4)
//     }
//      else if (chickens && cows && pigs) {
//     let legs = (chickens * 2) + (cows * 4) + (pigs * 4)
//     return legs
//     } 
// } 
// console.log(FarmProblem(2, 3, 5))
// console.log(FarmProblem())


// The farmer has counted his animals and he gives you a subtotal for each species. 
//You have to implement a function that returns the total number of legs of all the animals.

// Examples:
// ```
// animals(2, 3, 5) ➞ 36mn   
// animals(1, 2, 3) ➞ 22
// animals(5, 2, 8) ➞ 50
// ```

// ## 6. Convert Hours and Minutes into Seconds

// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

// Bonus: Write a function that takes seconds and converts them to days, hours, minutes, seconds

// function seconds(hours,minutes){
//     let result = ((hours*60) + minutes)*60;
//     return result;
// }
// console.log(seconds(1,30))

function day(second){            // if seconds > 86400 let day = seconds / 865000 
  if (second<60){
      return second + " equals "+ second +" seconds"
  }          
  else if(second===60){
      return second + " equals 1 min and 0 seconds"
  }
  else if(second>60 && second<3600){
    return second + " seconds equals " + Math.floor(second/60)+ " min and "+ (second%60)+ " seconds";
}
else if(second===3600){
    return second + " equals 1 hour"
}
else if(second>3600 && second<86400){
    return second + " seconds equals " + Math.floor(second/3600)+ " hours and "+ Math.floor((second%3600)/60)+ " minutes and " +  Math.floor(((second%3600)/60)%60) + " seconds";
}   
else if(second===86400){
    return second + " equals 1 day"
} 
else if(second > 86400){
    return second + " seconds equals " + Math.floor(second/86400)+ " days and "+ Math.floor((second%86400)/3600)+" hours "+ Math.floor((second%86400)/60)+" min"

}
}

console.log(day(196000))
// function day(second){
//     if(second === 86400) return second;
    
  //  } 23,888888888888


  const myGlobal = 0;

  function outerFunc2(){
  const myVar = 1 ;
  console.log(myVar);
  
      function innerFunc() {
          const myInnerVar = 2;
          console.log(myVar, myGlobal);
  
          function innerOfInnerFunc() {
          console.log(myVar, myGlobal, myInnerVar);
          }
      innerOfInnerFunc();
      }
  innerFunc();
  }
  
  outerFunc2();