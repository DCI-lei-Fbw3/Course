let determiner = 2;
if (determiner < 0) {
    x = "Less than 0"
} else {
    x = "Greater or equal to 0"
}
 console.log(x)
 let updater = "";
 let message = "positive integer"
if (determiner >= 0) {
    updater = "Greater or equal to 0";
    console.log(message)
} else {
    update = "Less than 0"
}





2:26
const fruit = prompt ("apples", "bananas", "oranges", "mangoes"); 
if (fruit == "apples") console.log("Apples are okay.");
if (fruit == "bananas") console.log("Bananas are good before and after a football match.");
if (fruit == "oranges") console.log("I can eat oranges all day!");
if (fruit == "mangoes") console.log("Did someone say mangoes? Where?");
switch (fruit) {
    case "apples":
    console.log("Apples are okay.");
    break;
    case "bananas":
    console.log("Bananas are good before and after a football match.");
    break;
    case "oranges":
    if (fruit == "oranges") console.log("I can eat oranges all day!");
    break;
    case "mangoes":
    if (fruit == "mangoes") console.log("Did someone say mangoes? Where?");
    break;
}