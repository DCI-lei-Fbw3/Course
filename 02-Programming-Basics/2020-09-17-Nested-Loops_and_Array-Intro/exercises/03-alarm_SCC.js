/*

Generate 10 random Numbers between [0, 1[  - that is 0 <= NUMBER < 1

define a const THRESHOLD and assign a value between the former interval

Loop over the generated numbers and log an alarm with the value and THRESHOLD, like:
"Attention: current value (VALUE) exceeds the threshold (THRESHOLD) by DIFFERENCE."

Bonus:
For each 0.1 of difference add an "*" at the start of the logged line, e. g. 
"*** Attention: current value (0.67859) exceeds the threshold (0.3) by 0.37859."

To determine the number of "*", the difference may be rounded down.
*/

const threshold = 0.3; 
for (let i=0; i<10; i++) {
    var randomNumber=Math.random();   
    console.log(randomNumber);
    if (randomNumber>threshold){
        var difference=randomNumber-threshold;
        var gap=Math.round(difference/0.1);
        var line="";
        for(let counter=1; counter<=gap; counter++) {
            line=line+"*";
        }
    console.log(`${line}Attention: current value ${randomNumber} exceeds the threshold ${threshold} by ${difference}`);
    }
    if (randomNumber<threshold){
        console.log("!");
    } 
    if (randomNumber==threshold) {
        console.log("??");
    }   
    }






 