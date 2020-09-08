// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

let numChild = 4,
  partnersName = "Tamouya",
  city = "Leipzig",
  jobTitle = "web-dev";
console.log(
  "You will be a",
  jobTitle,
  "in",
  city + ", and married to",
  partnersName,
  "with",
  numChild,
  "kids."
);
// console.log(`You will be a ${jobTitle} in ${city}, and married to ${partnersName} with ${numChild} kids.`)

// The Age Calculator
// Want to find out how old you'll be? Calculate it!
// Store your birth year in a variable.
// Store a future year in a variable.
// Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values. See Solution

let birthYear = 1947;
let futureYear = 2025;
let firstAge = futureYear - birthYear;
let secondAge = firstAge - 1;

console.log(
  "My mum will be either " +
    secondAge +
    " or " +
    firstAge +
    " in " +
    futureYear +
    "."
);

// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

let currentAge = 33;
let maxAge = 94;
let almondsPerDay = 12;
let totalLifeTime = (maxAge - currentAge) * 364.75 * almondsPerDay;
console.log(
  `You will need ${totalLifeTime} almonds to last you until the ripe old age of ${maxAge}.`
);

// The Geometrizer
// Calculate properties of a circle, using the definitions here.
// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".
// The area of a circle is pi times the radius squared (A = π r²). Learn how to use this formula to find the area of a circle when given the diameter.
// The circumference can also be calculated by multiplying 2×radius with pi (π=3.14).

let radius = 16;
let circumference = 2 * radius * Math.PI;
console.log("The circumference is " + circumference);

let cArea = Math.PI * Math.pow(radius, 2);
console.log("The area is " + cArea);

// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°Cl

// °C to °F	Divide by 5, then multiply by 9, then add 32
// °F to °C	Deduct 32, then multiply by 5, then divide by 9

let cTemperature = 10;
let fTemperature = (cTemperature / 5) * 9 + 32;
console.log(cTemperature + " °C is " + fTemperature + " °F.");

let fTemp = 100;
let cTemp = ((fTemp - 32) * 5) / 9;
console.log(fTemp + " °F is " + cTemp + " °C.");
