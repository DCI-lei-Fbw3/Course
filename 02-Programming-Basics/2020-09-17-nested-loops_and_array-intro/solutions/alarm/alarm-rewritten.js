/*
1. Define a constant called 'Threshold' also between 0 and 1.   //e.g. 0.3. 
2. Use a for loop to create 10 random numbers between 0 and 1.
3. Loop over the array of numbers and console log: "Attention: current value (VALUE) exceeds the threshold (THRESHOLD) by DIFFERENCE."
4. Bonus: Add a star to the start of the alarm for every 0.1 difference between the value and the threshold, rounding down.

Generate 10 random Numbers between [0, 1[  - that is 0 <= NUMBER < 1

define a const THRESHOLD and assign a value between the former interval

Loop over the generated numbers and log an alarm with the value and THRESHOLD, like:
"Attention: current value (VALUE) exceeds the threshold (THRESHOLD) by DIFFERENCE."

Bonus:
For each 0.1 of difference add an "*" at the start of the logged line, e. g. 
"*** Attention: current value (0.67859) exceeds the threshold (0.3) by 0.37859."

To determine the number of "*", the difference may be rounded down.

*/

const threshold = 0.2;                            //Define the threshold
for (let i = 0; i < 10; i++) {                    //Create a loop to run 10 times
  let value = Math.random();                      //Assign a random number to value
  if (value > threshold) {                        //Check if value exceeds the threshold
    let difference = (value - threshold);         //Assign the difference to a variable
    let stars = Math.floor(difference / 0.1);     //Work out how many stars we need
    let starString = "";                          //Create a string to assign stars to
    for (let x = 0; x < stars; x++) {             //Loop through the number of stars we need
      starString += "*"                           //Adding that number of stars to the string
    }
    console.log(`${starString} Attention: current value ${value} exceeds the threshold ${threshold} by ${difference}.`)  //console log all of it
  }
}


