/*
write a commandline programm that has one parameter,
assign that parameter to a variable "name".
log a greeting message to the console, like "Hi, NAME"
*/

let args = process.argv.slice(2);
let name = args[0];

console.log("Hi", name);


