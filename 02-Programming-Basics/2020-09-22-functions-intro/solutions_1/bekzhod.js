/*  ## The Fortune Teller

_Why pay a fortune teller when you can just program your fortune yourself?_

* Write a function named tellFortune that:
        * takes 4 arguments: number of children, partner's name, geographic location, job title.
        * outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
* Call that function 3 times with 3 different values for the arguments.  */

function tellFortune(x, y, z, n) {
  console.log(
    "you will be a " +
      x +
      "in" +
      y +
      " and married " +
      " to " +
      z +
      " with " +
      n +
      " kids"
  );
}
tellFortune("programmer", 2021, "killer", 0);

/*   ## The Puppy Age Calculator

_You know how old your dog is in human years, but what about dog years? Calculate it!_

* Write a function named calculateDogAge that:
        * takes 1 argument: your puppy's age.
        * calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
        * outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
* Call the function three times with different sets of values.
* Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
See Solution */

function calculateDogAge(age) {
  console.log("Your dog age is " + age * 7 + " years old in dog years");
}
calculateDogAge(6);

/*  ## The Lifetime Supply Calculator

_Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!_

* Write a function named calculateSupply that:
        * takes 2 arguments: age, amount per day.
        * calculates the amount consumed for rest of the life (based on a constant max age).
        * outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
* Call that function three times, passing in different values each time.
* Bonus: Accept floating point values for amount per day, and round the result to a round number. */

function calculateSupply(age, amount) {
  let sum = amount * 365 * age;
  console.log(
    "You will need " + sum + " to last you untill the ripe old age of " + age
  );
}
calculateSupply(15, 3);

/* ## The Geometrizer 

_Calculate properties of a circle, using the definitions here : http://math2.org/math/geometry/circles.html_

* Create a function called calcCircumfrence:

    * Pass the radius to the function.
    * Calculate the circumference based on the radius, and output "The circumference is NN".

* Create a function called calcArea:

    * Pass the radius to the function.
    * Calculate the area based on the radius, and output "The area is NN". */

function calcArea(radius) {
  let newradius = Math.PI * radius * radius;
  console.log("The area is " + newradius);
}
calcArea(10);

function calcCircumfrence(radius) {
  let newradius = radius * 2 * Math.PI;
  console.log("The circumference is " + newradius);
}
calcCircumfrence(10);

/* ## The Temperature Converter

_It's hot out! Let's make a converter based on the steps here: https://www.mathsisfun.com/temperature-conversion.html_

* Create a function called celsiusToFahrenheit:

        * Store a celsius temperature into a variable.
        * Convert it to fahrenheit and output "NN°C is NN°F".

* Create a function called fahrenheitToCelsius:

        * Now store a fahrenheit temperature into a variable.
        * Convert it to celsius and output "NN°F is NN°C." */

function celsiusToFahrenheit(C) {
  var fahrenheit = (C * 9) / 5 + 32;
  console.log(C + "*C" + " is " + fahrenheit + "*F");
}
celsiusToFahrenheit(5);

function fahrenheitToCelsius(F) {
  var celsius = ((F - 32) * 5) / 9;
  console.log(F + "*F" + " is " + celsius + "*C");
}
fahrenheitToCelsius(5);
