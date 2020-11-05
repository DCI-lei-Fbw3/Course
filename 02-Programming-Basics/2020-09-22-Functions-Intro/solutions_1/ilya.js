/* 
 The Fortune Teller
 Why pay a fortune teller when you can just program your fortune yourself?
 
 Write a function named tellFortune that: * takes 4 arguments: number of children, partner's name, geographic location, job title. * outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
 Call that function 3 times with 3 different values for the arguments. 
 */

function fortuneTeller() {
  let numberOfChildren = Math.floor(Math.random()*8);

  let partnersName = ["Maria", "Alexa", "Siri", "Java"];
  let partnersNameRand = partnersName[Math.floor(Math.random()*4)];

  let geoLoc = ["Germany","England","Afrika","Australia"];
  let geoLocRand = geoLoc[Math.floor(Math.random()*4)];

  let jobTitle = ["Welder", "JS Dev", "Doctor", "Opera Singer"];
  let jobTitleRand = jobTitle[Math.floor(Math.random()*4)];

  return numberOfChildren === 1 ? 
  console.log(`You will be a ${jobTitleRand} in ${geoLocRand}, and married to ${partnersNameRand} with ${numberOfChildren} kid.`) 
  : 
  console.log(`You will be a ${jobTitleRand} in ${geoLocRand}, and married to ${partnersNameRand} with ${numberOfChildren} kids.`);
}
fortuneTeller();
fortuneTeller();
fortuneTeller();

/* 
The Puppy Age Calculator
You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that: * takes 1 argument: your puppy's age. * calculates your dog's age based on the conversion rate of 1 human year to 7 dog years. * outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years. See Solution 
*/

const calculateDogAge = (dogAgeInHumanYears, conversionRate) => {
  return console.log(`Your doggie is ${dogAgeInHumanYears * conversionRate} years old in dog years!`);
}
calculateDogAge(1,6);
calculateDogAge(16,3);
calculateDogAge(7,8);



/* 
The Age Calculator
Want to find out how old you'll be? Calculate it!

Store your birth year in a variable.
Store a future year in a variable.
Calculate your 2 possible ages for that year based on the stored values.
For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.
*/

function ageCalc(birthYear, futureYear) {
  return console.log(`I will be either ` + (futureYear - birthYear - 1) + ` or ` + (futureYear - birthYear) + ` in ${futureYear}.`);
}
ageCalc(1992, 2953);


/* 
The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that: * takes 2 arguments: age, amount per day. * calculates the amount consumed for rest of the life (based on a constant max age). * outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number. 
*/

function calculateSupply(age, amountPerDay) {
  const maxAge = 100;;
  let total = (maxAge - age) * 365 * amountPerDay;

  return console.log(`You will need ${Math.round(total)} portions of ice cream to last you until the ripe old age of ${maxAge}.`);

}
calculateSupply(15, 4);
calculateSupply(26, 2);
calculateSupply(56, 1);


/* 
The Geometrizer
Calculate properties of a circle, using the definitions here : http://math2.org/math/geometry/circles.html

Create a function called calcCircumfrence:
  Pass the radius to the function.
  Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called calcArea:
  Pass the radius to the function.
  Calculate the area based on the radius, and output "The area is NN". 
*/

function geometizer(radius) {
  let circumference = (2 * Math.PI * radius).toFixed(2);
  let area = (Math.PI * radius**2).toFixed(2);
  return console.log(`Radius: ${radius}\nThe circumference is ${circumference}\nThe area is ${area}`);
}
geometizer(5);



/* 
The Temperature Converter
It's hot out! Let's make a converter based on the steps here: https://www.mathsisfun.com/temperature-conversion.html

Create a function called celsiusToFahrenheit:

  * Store a celsius temperature into a variable.
  * Convert it to fahrenheit and output "NN°C is NN°F".
  
Create a function called fahrenheitToCelsius:

  * Now store a fahrenheit temperature into a variable.
  * Convert it to celsius and output "NN°F is NN°C." 
  
*/

const celsiusToFahrenheit = (tempInC) => {
  // Divide by 5, then multiply by 9, then add 32
  console.log(`${tempInC}°C is ${(tempInC / 5 * 9 + 32).toFixed(2)}°F".`)
  return (tempInC / 5 * 9 + 32).toFixed(2);
}
celsiusToFahrenheit(30);

const fahrenheitToCelsius = (tempInF) => {
  // Deduct 32, then multiply by 5, then divide by 9
  console.log(`${tempInF}°F is ${((tempInF - 32) * 5 / 9).toFixed(2)}°C".`)
  return ((tempInF - 32) * 5 / 9).toFixed(2);
}
fahrenheitToCelsius(105);


