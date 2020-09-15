var fruitInput = prompt("Please enter either apples, oranges, bananas, or mangoes");

switch (fruitInput){
        case "apples":
            console.log("Apples are ok.");
            break;
        case "bananas":
            console.log("Bananas are good before and after a football match.");
            break;
        case "oranges":
            console.log("I can eat oranges all day!");
            break;
        case "mangoes":
            console.log("Did someone say mangoes? Where?");
            break;
        default:
            // default does not need a break statement
            console.log("Please enter a valid fruit");

}

    if(fruitInput == "apples") console.log("Apples are ok.");
    if(fruitInput == "bananas") console.log("Bananas are good before and after a football match.");
    if(fruitInput == "oranges") console.log("I can eat oranges all day!");
    if(fruitInput == "mangoes") console.log("Did someone say mangoes? Where?");

