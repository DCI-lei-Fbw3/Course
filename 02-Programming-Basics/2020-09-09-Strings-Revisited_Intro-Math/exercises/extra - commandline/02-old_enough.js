/*
write a commandline programm that has one parameter,
assign that parameter to a variable "name".
log a greeting message to the console, like "Hi, NAME"
*/

let args = process.argv.slice(2);
let age = args[0];

console.log(age);
console.log(age < 18? "too young" : "old enough");
