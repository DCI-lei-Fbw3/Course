// !find string length
// function length(str) {
//  if (str == "") return 0;
//  else return length(str.substring(1)) + 1;
// }
// console.log(length("Hello"));
// !reverse string
// function reverse(str) {
//  if (str == "") return "";
//  else return str.slice(-1) + reverse(str.slice(0, -1));
// }
// console.log(reverse("hello"));
// !power
// function circuitPower(voltage, current) {
//  if (current == 1) return voltage;
//  else return voltage + circuitPower(voltage, current - 1);
// }
// console.log(circuitPower(230, 10));
// !addition
function addition(num) {
    if (num == 0) return 1;
    else if (num < 0) return ++num;
    else return ++num;
}
console.log(addition(3));



function addition(num) {
    return ++num;
}
console.log(addition(3));

// !power
// function circuitPower(voltage, current) {
//  if (current == 1) return voltage;
//  else return voltage + circuitPower(voltage, current - 1);
// }
// console.log(circuitPower(230, 10));
// !fibonacci
// const fibonacci = (number) => {
//  if (number <= 1) return 1;
//  return fibonacci(number - 1) + fibonacci(number - 2);
// };
// console.log(fibonacci(9));