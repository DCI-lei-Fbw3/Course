/*
## The Fortune Teller

_Why pay a fortune teller when you can just program your fortune yourself?_

* Write a function named tellFortune that:
        * takes 4 arguments: number of children, partner's name, geographic location, job title.
        * outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
* Call that function 3 times with 3 different values for the arguments.
*/

/**************SOLUTION*********************/

function tellFortune(noOfChild, partnerName, geoLocation, jobTitle) {
    console.log("You will be " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + noOfChild + " kid/s.")
}

tellFortune(3, "Jo", "France", "Burger Flipper");
tellFortune(5, "Sam", "Africa", "Pizza Maker");
tellFortune(1, "Terry", "UK", " Judge");


/***************************************************************************************************/

/*
## The Puppy Age Calculator

_You know how old your dog is in human years, but what about dog years? Calculate it!_

* Write a function named calculateDogAge that:
        * takes 1 argument: your puppy's age.
        * calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
        * outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
* Call the function three times with different sets of values.
* Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

/**************SOLUTION*********************/


function calculateDogAge(puppyAge) {
    var realAge = puppyAge * 7;
    console.log("Your doggie is " + realAge + " years old in dog years!")
}

calculateDogAge(2);


/***************************************************************************************************/


/*
## The Lifetime Supply Calculator

_Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!_

* Write a function named calculateSupply that:
        * takes 2 arguments: age, amount per day.
        * calculates the amount consumed for rest of the life (based on a constant max age).
        * outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
* Call that function three times, passing in different values each time.
* Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

/**************SOLUTION*********************/

const calculateSupply = function (age, amountPerDay) {

    const daysInYear = 365;
    var perYear = amountPerDay * daysInYear;
    var total = perYear * age;

    console.log("You will need " + total + " to last you until the ripe old age of " + age);
}

calculateSupply(10, 1);
calculateSupply(91, 3);
calculateSupply(60, 7);


/***************************************************************************************************/


/*
## The Geometrizer

_Calculate properties of a circle, using the definitions here : http://math2.org/math/geometry/circles.html_

//Good link for Math Solutions: https://www.mathsisfun.com/
* Create a function called calcCircumfrence:

    * Pass the radius to the function.
    * Calculate the circumference based on the radius, and output "The circumference is NN".

* Create a function called calcArea:

    * Pass the radius to the function.
    * Calculate the area based on the radius, and output "The area is NN".
    */

/**************SOLUTION***One******************/


function calcCircumfrence(radius) {
    var realRad = radius + radius;
    var totalRadius = Math.PI * realRad;
    console.log("The circumference is " + totalRadius);
}

calcCircumfrence(1);
calcCircumfrence(10);
calcCircumfrence(250);


//

/**************SOLUTION**Two*******************/


//Good link for Area Solutions:  https://www.mathsisfun.com/geometry/circle-area.html


const calcArea = function (radius) {
    var realRad = radius * radius;
    var totalRadius = Math.PI * realRad;
    console.log("The area is " + totalRadius);
}

calcArea(5);
calcArea(20);
calcArea(50);

//π (Pi) times the Radius squared:	A = π r2

/***************************************************************************************************/

/*
## The Temperature Converter

_It's hot out! Let's make a converter based on the steps here: https://www.mathsisfun.com/temperature-conversion.html_

* Create a function called celsiusToFahrenheit:

        * Store a celsius temperature into a variable.
        * Convert it to fahrenheit and output "NN°C is NN°F".

* Create a function called fahrenheitToCelsius:

        * Now store a fahrenheit temperature into a variable.
        * Convert it to celsius and output "NN°F is NN°C."
*/

/**************SOLUTION**One*******************/


function celsiusToFahrenheit(celsTemp) {
    var farTemp = (celsTemp / 5) * 9 + 32;
    console.log(celsTemp + "°C is " + farTemp + "°F ")
}
celsiusToFahrenheit(50);
celsiusToFahrenheit(100);
celsiusToFahrenheit(35);


/**************SOLUTION**Two*******************/

const fahrenheitToCelsius = function (farTemp) {
    var celsTemp = (farTemp - 32) * 5 / 9;
    console.log(farTemp + "°F is " + celsTemp + "°C");
}

fahrenheitToCelsius(212);
fahrenheitToCelsius(122);
fahrenheitToCelsius(95);