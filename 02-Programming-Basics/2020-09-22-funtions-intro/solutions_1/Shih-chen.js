/*The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that: ** takes 4 arguments: number of children, partner's name, geographic location, job title. ** outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.*/

function FortuneTeller (numberChild, partnerName, geoLocation, jobTitle) {
    console.log (`You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberChild} kids.`);
}

FortuneTeller (9, "Monster", "Mars", "Monstress");
FortuneTeller (100, "Zeus", "Olympus", "Queen of the Olympus");
FortuneTeller (2, "Hades", "Underworld", "Queen of the Underworld");
console.log("-------------------");

/*The Puppy Age Calculator
You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that: 1) takes 1 argument: your puppy's age. 2) calculates your dog's age based on the conversion rate of 1 human year to 7 dog years. 3) outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years. See Solution*/

function calculateDogAge (n) {    
    console.log(`"Your doggie is ${n} years old in dog years!"`);
    let dogAge=n*7;
    console.log(`That means your doggie is ${dogAge} years old in human years!`);
}

calculateDogAge(2);
calculateDogAge(10);
calculateDogAge(14);

console.log("-------------------");

/*The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that: 1) takes 2 arguments: age, amount per day. 2) calculates the amount consumed for rest of the life (based on a constant max age). 3) outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.*/

const maxAge=80;
function calculateSupply (age, amount) {
    let total=(maxAge-age)*amount*365;   
    total=Math.round(total); 
    console.log(`Now you are only ${age} consuming ${amount} of creamcheese a day. You will need ${total} packs of creamcheese to last you until the ripe old age of ${maxAge}`);
}

calculateSupply(20, 0.3);
calculateSupply(40, 0.4);
calculateSupply(60, 1.2);
console.log("-------------------");

/* The Geometrizer
Calculate properties of a circle, using the definitions here : http://math2.org/math/geometry/circles.html

Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".*/

const calcCircumference = (r) => {
    let circumference=2*r*3.1416;
    console.log(`The circumference of a circle whose radius is ${r} is ${circumference}`);
} 

calcCircumference(112);
console.log("\n");

const calcArea = (r) => {
    let circleArea=3.1416*r**2
    console.log(`The area of a circle whose radius is ${r} is ${circleArea}`);
} 
calcArea (112);
console.log("-------------------");
/*The Temperature Converter
It's hot out! Let's make a converter based on the steps here: https://www.mathsisfun.com/temperature-conversion.html

Create a function called celsiusToFahrenheit:

  1) Store a celsius temperature into a variable.
  2)Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:

  1) Now store a fahrenheit temperature into a variable.
  2)Convert it to celsius and output "NN°F is NN°C."*/

  const celsiusToFahrenheit = function (temp) {
      let temperature = (temp*9)/5 + 32;
      console.log(`Celsius ${temp} degrees is ${temperature} in Fahrenheit.`);
  }
  celsiusToFahrenheit (100);
  console.log("\n");
  const fahrenheitToCelsius = function (temp) {
    let temperature = (temp-32)*5/9;
    console.log(`Fahrenheit ${temp} degrees is ${temperature} in Celsius.`);
}

fahrenheitToCelsius (100);
console.log("-------------------");