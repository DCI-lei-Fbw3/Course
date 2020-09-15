var fruits2 = prompt(
    "which fruit you like",
    "apples, bananas, oranges, mangoes"
);
if (fruits2 === "apples") console.log("Apples are ok");
else if (fruits2 === "bananas")
    console.log("Bananas are good and after a football match.");
else if (fruits2 === "oranges") console.log("I can eat oranges all day");
else if (fruits2 === "mangoes") console.log("Did someone say mangoes? Where?");
else console.log("just a fruit!!");
2:06
var fruits = prompt(
    "which fruit you like",
    "apples, bananas, oranges, mangoes"
);
switch (fruits) {
    case "apples":
        console.log("Apples are ok");
        break;
    case "bananas":
        console.log("Bananas are good and after a football match.");
        break;
    case "oranges":
        console.log("I can eat oranges all day");
        break;
    case "mangoes":
        console.log("Did someone say mangoes? Where?");
        break;
    default:
        console.log("just a fruit!!");
}