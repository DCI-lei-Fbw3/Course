let determiner = -9;
if (determiner < 0) {
    let x = "Less than 0";
    console.log(x);
}
if (determiner >= 0) {
    let x = "Greater or equal to 0";
    console.log(x);
}
if (determiner < 0) {
    let updater = "Less than 0";
    let message = "Positive Integer";
    console.log(`${updater} and ${message}`);
}
// console.log(message); message is not define outside the scope
if (determiner >= 0) {
    let updater = "Greater or equal to 0";
    console.log(updater);
}
let apple = 5;
let ternary = apple ? console.log(true) : console.log(false);
