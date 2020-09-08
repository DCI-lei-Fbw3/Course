let childNum = 5;
let name = "john";
let place = "Germany";
let job = "driver";

console.log(
	`Hi, I'm ${name} I'm from ${place}, I have ${childNum} children and my job is ${job}`
);

//## The Age Calculator
let birthYear = 1983;
let futureYear = 2025;
let calcYear = futureYear - birthYear;
console.log(`I will be either ${calcYear} or ${calcYear + 1} in ${futureYear}`);

//## The Lifetime Supply Calculator

let curAge = 28;
let maxAge = curAge + 10;
let estDay = 3000;
let daysInYear = 365;
let totalCon = daysInYear * (maxAge - curAge) * estDay;
console.log(totalCon);

//## The Geometrizer

let radius = 15;
let circumference = Math.PI * radius;
console.log(`The circumference is ${circumference}`);
let areaBase = Math.PI * radius ** 2;
console.log(`The area is ${areaBase}`);

//## The Temperature Converter

let celsius = 20;
let fahrenheit = celsius * (9 / 5) + 32;
console.log(`${celsius}°C is ${fahrenheit}°F`);
celsius = ((fahrenheit - 32) * 5) / 9;
console.log(`${fahrenheit}°F is ${celsius}°C`);
