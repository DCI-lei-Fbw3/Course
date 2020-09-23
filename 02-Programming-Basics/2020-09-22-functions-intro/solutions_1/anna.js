function tellFortune(children, partnerName, city, jobTitle) {
  console.log(
    `You will be a ${jobtitle} in ${city} and married to ${partnerName} with ${children} kids`
  );
}

tellFortune(4, "Alexander", "Leipzig", "Full-stack Developer");
tellFortune(2, "Mary", "New York", "Fashion Designer");
tellFortune(9, "Brad Pitt", "London", "Film Director");

function calculateDogAge(humanYears) {
  console.log(humanYears * 7);
}

calculateDogAge(3);
calculateDogAge(7);
calculateDogAge(14);

function calculateSupply(age, amountPerDay) {
  const maxAge = 94;
  let totalLifeTime = Math.round((maxAge - age) * 364.75 * amountPerDay);
  console.log(
    `You will need ${totalLifeTime} to last you until the ripe old age of ${maxAge}.`
  );
}

calculateSupply(53, 2);
calculateSupply(12, 15);
calculateSupply(22, 1);

function calcCircumference(radius) {
  let circumference = 2 * radius * Math.PI;
  console.log("The circumference is " + circumference);
}

calcCircumference(12.3);
calcCircumference(4);
calcCircumference(2.64);

function calcArea(radius) {
  let cArea = Math.PI * Math.pow(radius, 2);
  console.log("The area is " + cArea);
}

calcArea(12.3);
calcArea(4);
calcArea(2.64);

function cToF(cTemperature) {
  let fTemperature = (cTemperature / 5) * 9 + 32;
  console.log(cTemperature + " °C is " + fTemperature + " °F.");
}

cToF(30);
cToF(12);
cToF(43);

function fToC(fTemperature) {
  let cTemperature = ((fTemperature - 32) * 5) / 9;
  console.log(fTemperature + " °F is " + cTemperature + " °C.");
}

fToC(22);
fToC(100);
fToC(78);
