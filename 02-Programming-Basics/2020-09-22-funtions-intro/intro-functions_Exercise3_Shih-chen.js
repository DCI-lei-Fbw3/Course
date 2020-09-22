function expoValues(x, y) {
    if (typeof x != "number" || typeof y != "number"){
        console.log ("please make sure you have offered two numbers.");
        //break;
        }
    for (let i=0; i<y; i++) {
        let total=x**y;
        console.log(total);
    }

expoValues(3, 5);

console.log("......");

var fruit="strawberries";
function printFavoriteFruit (aFruit) {
    console.log (`My favorite fruit is ${aFruit}`);
}
printFavoriteFruit(fruit);

console.log(".......");