//The Lifetime Supply Calculator

var numKids  = 5;
var partner  = 'David Beckham';
var geoLocation = 'Costa Rica';
var jobTitle = 'web developer';

var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
console.log(future);


// The Age Calculator
var birthYear = 1984;
var futureYear  = 2012;
var age  = futureYear - birthYear;
console.log('I will be either ' + age + ' or ' + (age - 1));

// The lifetime Supply Calculator

var age = 28;
var maxAge = 100;
var numPerDay = 2;
var totalNeeded = (numPerDay * 365) * (maxAge - age);
var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
console.log(message);

// The Geometrizer

var radius = 3;
var circumference = Math.PI * 2*radius;
console.log("The circumference is " + circumference);
var area = Math.PI * radius*radius;
console.log("The area is " + area);

// The Temperature Converter

var celsius = 30;
var celsiusInF = (celsius*9)/5 + 32; //--> 86 F
console.log(celsius + '°C is ' + celsiusInF + '°F');
var fahrenheit = 20;
var fahrenheitInC = ((fahrenheit - 32)*5)/9;
console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');