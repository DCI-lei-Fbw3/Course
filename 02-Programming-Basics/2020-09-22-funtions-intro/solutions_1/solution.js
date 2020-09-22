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

function fahrenheitToCelsius(temp){
    let temp_F = temp;
    let temp_C = ((temp_F) - 32) * 5/9;
    console.log(temp_F + " in °F " + "is " + temp_C);
}

fahrenheitToCelsius(104);