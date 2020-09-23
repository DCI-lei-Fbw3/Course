//Question 1

/* function tellFortune(children, name, location, title){
console.log("You will be an " + title + " in " + location + " and married to " + name + " with " + children + " kids" );
console.log("You will be an " + title + " in " + location + " and married to " + name + " with " + children + " kids" );
console.log("You will be an " + title + " in " + location + " and married to " + name + " with " + children + " kids" );
}

tellFortune(2, "Girl", "Germany", "Programmer");
 */

//Question 2

/* function calculateDogAge(human_age){
let calc_age = human_age * 7;
console.log("Your doggie is " + calc_age + " in dog years");
}

calculateDogAge(1);
calculateDogAge(2);
calculateDogAge(3); */

// Question 3

/* function calculateSupply(age, amount_per_day){

let max_age = 75;
let rest = max_age - age;

let total = Math.round(rest * 365 * amount_per_day);
console.log(total);
}

calculateSupply(35,2.5578785454);
calculateSupply(35,5);
calculateSupply(35,10); */

// Question 4

/* function calcCircumfrence(radius){  // radius in cm
let circum = 2 * Math.PI * radius;
console.log("The circumference is " + circum);
}

calcCircumfrence(5); 

function calcArea(radius){ // radius in cm
let area = Math.PI * Math.pow(radius,2);
console.log("The area is " + area);
}

calcArea(2); */

//Question 5

/* function celsiusToFahrenheit(temp){
    let temp_C = temp;
    let temp_F = temp_C * (9/5) + 32;
    console.log(temp_C + " in °C to °F is " + temp_F); 
}

celsiusToFahrenheit(40); */

/* function fahrenheitToCelsius(temp){
    let temp_F = temp;
    let temp_C = ((temp_F) - 32) * 5/9;
    console.log(temp_F + " in °F " + "is " + temp_C);
}

fahrenheitToCelsius(104); */

// excercise 2 - Q1

/* function mult(x,y){
    return x*y;
}

console.log(mult(2,3)); */

//Q2

/* let multi = function(x,y){
return x*y;
}
console.log(multi(2,3)); */

//Q3

/* let multi = (x,y) => {
return x*y;
}

console.log(multi(2,3)); */

//Q4

/* function remainder(x,y){
    return x%y; 
}
console.log(remainder(3,2));

let remain_1 = function(x,y){
    return x%y;
}
console.log(remain_1(3,2));

let remain_2 = (x,y) => {
return x%y;
}
console.log(remain_2(3,2)); */

// Excercise 3 - Q1

/* function valid(x, y) {
  if (isNaN(x)) {
    console.log("x is not a number");
  } else {
    console.log("x is a number");
  }
  if (isNaN(y)) {
    console.log("y is not a number");
  } else {
    console.log("y is a number");
  }
  if (isNaN(x)) {
    console.log("x values cannot be exponated");
  } else {
    console.log(x ** y);
  }
}

valid(4, 2); */

//Q2

/* let fruit = "apple";
function printFavoriteFruit() {
  let fruit = "oranges";
  return fruit;
}
console.log(printFavoriteFruit()); */

//Q3

/* function exponent(num_1, num_2) {
  var result = num_1 ** num_2;
} 

console.log(result); / */

//the variables let or var cannot be accessed from outside since they are block and function scoped respectively.



// Excercise 4

//Q1

/* function Q1(x){
    var sum = 0;
    for (let i = 1; i <=x; i++){
var sum = sum + i;
console.log(sum);

    }
}
Q1(600); */


// Q2

/* function numbers(x,y,z){
return (x**3) + (y**3) + (z**3);

}

console.log(numbers(2,5,9)); */

// Q3

/* function isStr(x,y){
    for (let i = 0; i < 5 ; i ++){
            if (x.slice(i, i+1) == y.slice(i, i+1)){
    return "true";
            }
            else{
                return "false"
            }

    }
}

console.log(isStr("Hello", "He")); */

//Q4

/* function isLess(x){
return (x <=0) ? true : false

}

console.log(isLess(10)); */


//Q5

function occurences(x,y){
var b = [];
   for (let i = 0 ; i <=x.length; i++){
    
       if (x[i] == y){
       b.push(y);
       
       
       
       }
      
   }
   console.log(b);
   console.log(b.length);
 }

 occurences("this is a string", "i");
 


 