/* 
The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.
Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids." 
*/

function fortuneTeller() {
    let numberOfChildren = Math.floor(Math.random()*8);

    let partnersName = ["Maria", "Alexa", "Siri", "Java"];
    let partnersNameRand = partnersName[Math.floor(Math.random()*4)];

    let geoLoc = ["Germany","England","Afrika","Australia"];
    let geoLocRand = geoLoc[Math.floor(Math.random()*4)];

    let jobTitle = ["Welder", "JS Dev", "Doctor", "Opera Singer"];
    let jobTitleRand = jobTitle[Math.floor(Math.random()*4)];

    return console.log(`You will be a ${jobTitleRand} in ${geoLocRand}, and married to ${partnersNameRand} with ${numberOfChildren} kids.`)
}

fortuneTeller();

/* 
The Age Calculator
Want to find out how old you'll be? Calculate it!

Store your birth year in a variable.
Store a future year in a variable.
Calculate your 2 possible ages for that year based on the stored values.
For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.
 */

function ageCalc() {

let birthYear = 1993;
let futureYear = 2027;

return console.log(`I will be either ` + (futureYear - birthYear) + ` or ` + (futureYear - birthYear - 1) + ` in 2027.`);

}

ageCalc();

/* 
The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X". 
*/

function lifeTimeSupplyCalc() {

    let age = 27;
    let maxAge = age+73;
    let amountPerDay = 2;
    let total = (maxAge - age) * 365 * 2;

    return console.log(`You will need ${total} portions of ice cream to last you until the ripe old age of ${maxAge}.`);

}

lifeTimeSupplyCalc();

/* 
The Geometrizer
Calculate properties of a circle, using the definitions here: http://math2.org/math/geometry/circles.html

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".
*/

function geometizer() {

    let radius = 7;
    let circumference = (2 * Math.PI * radius).toFixed(2);
    let area =  (Math.PI * radius**2).toFixed(2);

    return console.log(`The circumference is ${circumference}\nThe area is ${area}`);

}

geometizer();


/* 
The Temperature Converter
It's hot out! Let's make a converter based on the steps here: https://www.mathsisfun.com/temperature-conversion.html

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C." 
*/

function tempConv() {

    let tempInC = 35;
    // Divide by 5, then multiply by 9, then add 32
    let tempInCconvertedToF = (tempInC / 5 * 9 + 32).toFixed(2);
    
    let tempInF = 100;
    // Deduct 32, then multiply by 5, then divide by 9
    let tempInFconvertedToC = ((tempInF - 32) * 5 / 9).toFixed(2);

    return console.log( `${tempInC}°C is ${tempInCconvertedToF}°F \n${tempInF}°F is ${tempInFconvertedToC}°C`);

}

tempConv();