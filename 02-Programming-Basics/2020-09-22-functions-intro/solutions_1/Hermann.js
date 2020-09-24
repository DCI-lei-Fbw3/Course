/*
## The Fortune Teller

_Why pay a fortune teller when you can just program your fortune yourself?_

* Write a function named tellFortune that:
        ** takes 4 arguments: number of children, partner's name, geographic location, job title.
        ** outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
* Call that function 3 times with 3 different values for the arguments.
Executive.
Director.
Coordinator.
*/

function tellFortune(nberOfChildren, partName, geoLocation,jobTitle){
    console.log(`You will be a ${jobTitle} in ${geoLocation}, and married to ${partName} with ${nberOfChildren} kids.`)
}
tellFortune(5, "Hermann", "Leipzig", "Manager")
tellFortune(4, "Tamouya", "Berlin", "Director")
tellFortune(3, "Totim", "Halle", "Coordinator")
// let kidNumber = [5,4,3]
// let partName = ["Hermann","Tamouya","Totim"];
// let geoLocation = ["Leipzig","Berlin","Halle"];
// let jobTitle = ["Manager","Director","Coordinator"];
// for(let i=0; i<4; i++){
//     function tellFortune(nberOfChildren, partName, geoLocation,jobTitle){
//         console.log("You will be a " +jobTitle[i] + "in " + geoLocation[i] + ", and married to "+ partName[i]+  "with"+ kidNumber[i]+ "kids.");
//     }
//     tellFortune(kidNumber[i], partName[i], geoLocation[i], jobTitle[i]);
// }


/*
_You know how old your dog is in human years, but what about dog years? Calculate it!_

* Write a function named calculateDogAge that:
        1) takes 1 argument: your puppy's age.
        2) calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
        3) outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
* Call the function three times with different sets of values.
* Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
See Solution
*/

function dogFunction(puppyAge){
    let dogAge = puppyAge*7;
    console.log(`Your doggie is ${dogAge} years old in dog years!`)
}
dogFunction(2);
dogFunction(7);
dogFunction(5);

/*
## The Lifetime Supply Calculator

_Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!_

* Write a function named calculateSupply that:
        1) takes 2 arguments: age, amount per day.
        2) calculates the amount consumed for rest of the life (based on a constant max age).
        3) outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
* Call that function three times, passing in different values each time.
* Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

function calculateSupply(age, amountPerDay){
    // const maxAge = prompt("Enter your age");
     const maxAge = 80;
    let result = (maxAge-age)*Math.round(amountPerDay);
    console.log(`You will need ${result} to last you until the ripe old age of ${maxAge} years`);
}
calculateSupply(31,10);
calculateSupply(20,15);
calculateSupply(25,21.125);

/*
## The Geometrizer 

_Calculate properties of a circle, using the definitions here : http://math2.org/math/geometry/circles.html_

* Create a function called calcCircumfrence:

    1) Pass the radius to the function.
    2) Calculate the circumference based on the radius, and output "The circumference is NN".

* Create a function called calcArea:

    1) Pass the radius to the function.
    2) Calculate the area based on the radius, and output "The area is NN".
*/
function calcCircumfrence(radius){
    let result1 = 2 *Math.PI*radius;
    console.log(`The circumference is ${result1}` );
}
calcCircumfrence(10);


// * Create a function called calcArea: 

function calcArea(radius){
    let result2 =Math.PI*Math.pow(radius,2);
    console.log(`The area is ${result2}` );
}
calcArea(10);


/* ## The Temperature Converter

_It's hot out! Let's make a converter based on the steps here: https://www.mathsisfun.com/temperature-conversion.html_

* Create a function called celsiusToFahrenheit:

        1) Store a celsius temperature into a variable.
        2)Convert it to fahrenheit and output "NN°C is NN°F".

* Create a function called fahrenheitToCelsius:

        1) Now store a fahrenheit temperature into a variable.
        2)Convert it to celsius and output "NN°F is NN°C." 
        C = 5/9 (F - 32) */

        function celsiusToFahrenheit(celsiusNumber){
         let fahrenheitNumber = (celsiusNumber/(5/9))+32;
         console.log(`${celsiusNumber}° C is ${fahrenheitNumber}° F`)

        }
        celsiusToFahrenheit(25);

        // * Create a function called fahrenheitToCelsius:

        function fahrenheitToCelsius(fahrenheitNumber2){
            let celsiusNumber2 = 5/9* (fahrenheitNumber2 - 32);
            console.log(`${fahrenheitNumber2}° F is ${celsiusNumber2}° C`)
   
           }
           fahrenheitToCelsius(77);