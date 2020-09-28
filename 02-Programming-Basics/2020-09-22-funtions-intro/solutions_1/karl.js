/exercise 1
/* function fortuneTeller(numberOfChildren, partnersName, geographicLocation, jobTitle){
    console.log("you will have " + numberOfChildren + " children with " + partnersName + ". you will live in " + geographicLocation + " and work as a " + jobTitle + "." )
}; */
/* fortuneTeller; */ //do i have to call the function here??
/* console.log(fortuneTeller(4, "lisa", "germany", "astronaut"))
function calculateDogAge(humanAge){
    DogYearAge = humanAge * 7;
    console.log("Your doggie is " + DogYearAge +  " years old in dog years!");
};
console.log(calculateDogAge(9)); */
//bonus
function calculateSupply(age, amountPerDay, snack){
    const maxAge = 100;
    let leftLife = maxAge - age;
    let x = (leftLife * 365) * amountPerDay;
    console.log("You will need " + x + "" + snack + " to last you until the ripe old age of " + maxAge + ".")
};
console.log(calculateSupply(27, 6, "snickers"))
//bonus
function calcCircumfrence(radius){
   let circumfrence = 2 * Math.PI * radius;
   console.log("The circumference is " + circumfrence);
};
console.log(calcCircumfrence(2));
function calcArea(radius){
    let area = Math.PI * (radius * radius);
    console.log("The area is " + area);
};
console.log(calcArea(4));
function fahrenheitToCelsius(fahrenheitValue){
    let celsiusValue = (fahrenheitValue - 32) * 5 /9;
    console.log(fahrenheitValue + "°F is " + celsiusValue + "°C");
};
console.log(fahrenheitToCelsius(32));
function celsiusToFahrenheit(celsiusValue){
    let fahrenheitValue = celsiusValue / 5 * 9 + 32;
    console.log(celsiusValue + "°C is " + fahrenheitValue + "°F");
};
console.log(celsiusToFahrenheit(0));