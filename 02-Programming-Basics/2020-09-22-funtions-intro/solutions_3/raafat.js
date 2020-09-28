// !Print Exponential Values
// const ExponentialValue = (number1, number2) => {
//  if ((typeof number1 && typeof number2) == "number") {
//      let result = 1;
//      let array = [];
//      for (let index = 0; index < number2; index++) {
//          result *= number1;
//          array.push(result);
//      }
//      return array.toString();
//  }
// };
// console.log(ExponentialValue(3, 5));
// !Fruits
// let favoriteFruit = "Bananas";
// const printFavoriteFruit = () => {
//  favoriteFruit = "Apples";
//  return `My favorite fruit is: ${favoriteFruit}`;
// };
// console.log(printFavoriteFruit());
// !Multiply a Number by Itself
const exponent = (number1, number2) => {
    let result = 1;
    for (let index = 0; index < number2; index++) {
        result *= number1;
    }
    return result;
};
console.log(exponent(4, 2));
console.log(result); // result is not defined outside the function