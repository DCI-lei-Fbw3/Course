// source: https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_strings3

// Concatenate the two strings to console.log "Hello World!".

var str1 = "Hello ";
var str2 = "World!";

let a = str1 + str2
console.log(a);

let b = `${str1}${str2}`;
console.log(b);

console.log(a == b);

// actually not a concatenated string:
console.log(str1, str2, "a", "b", "c");
