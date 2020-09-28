// !The Fortune Teller
// const tellFortune = (fatherName, motherName, geoLocation, jobTitle) => {
//  let married = "";
//  let kidsNumber = 0;
//  let futureJob = "";
//  let location = "";
//  if ((fatherName.length || motherName.length) >= 7) {
//      married = "old ugly person";
//      kidsNumber = 5;
//  } else {
//      married = "young beautiful person ";
//      kidsNumber = 2;
//  }
//  if ((geoLocation.length || jobTitle.length) >= 10) {
//      futureJob = "rich";
//      location = "moon";
//  } else {
//      futureJob = "poor";
//      location = "underground";
//  }
//  return `You will be a ${futureJob} in ${location}, and married to ${married} with ${kidsNumber} kids.`;
// };
// console.log(tellFortune("john", "marry", "Europe", "programmer"));
// !The Puppy Age Calculator
// const calculateDogAge = (dogAge, convertingRate) => {
//  let dogAgeInHumanYear = dogAge * convertingRate;
//  return `Your doggie is ${dogAgeInHumanYear} years old in dog years!`;
// };
// console.log(calculateDogAge(5, 5));
// console.log(calculateDogAge(3, 6));
// console.log(calculateDogAge(4, 8));
// !The Lifetime Supply Calculator
// const calculateSupply = (age, amountPerDay) => {
//  let maxAge = 70;
//  let restOfYears = maxAge - age;
//  let amountPerYear = amountPerDay * 365;
//  let totalSupply = restOfYears * Math.round(amountPerYear);
//  return `You will need ${totalSupply} snacks to last you until the ripe ge of ${maxAge}`;
// };
// console.log(calculateSupply(34, 3.52));
// console.log(calculateSupply(30, 5.98));
// console.log(calculateSupply(25, 7.78));
// !The Geometrizer
// const calcCircumferenceAndArea = (radius) => {
//  let circumference = 2 * Math.PI * radius;
//  let calcArea = Math.PI * radius ** 2;
//  return `The circumference is ${circumference.toFixed(
//      3
//  )} and the area is ${calcArea.toFixed(3)}`;
// };
// console.log(calcCircumferenceAndArea(2.5));
//! The Temperature Converter
// const temperatureConverter = (celsius, fahrenheit) => {
//  function celsiusToFahrenheit(celsius) {
//      const cTemp = celsius;
//      const cToFahr = (cTemp * 9) / 5 + 32;
//      const result = `${cTemp}\xB0C is ${cToFahr}\xB0F.`;
//      return result;
//  }
//  function fahrenheitToCelsius(fahrenheit) {
//      const fTemp = fahrenheit;
//      const fToCel = ((fTemp - 32) * 5) / 9;
//      const result = `${fTemp}\xB0F is ${fToCel.toFixed(3)}\xB0C.`;
//      return result;
//  }
//  return `${celsiusToFahrenheit(celsius)} and ${fahrenheitToCelsius(
//      fahrenheit
//  )}`;
// };
// console.log(temperatureConverter(60, 45));