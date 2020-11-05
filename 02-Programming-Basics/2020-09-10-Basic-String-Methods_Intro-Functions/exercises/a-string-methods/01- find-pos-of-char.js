// source: https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_string_methods1

// Find the position of the character h in the string txt.
var txt = "abcdefghijklm";
var pos = txt.indexOf("h");

console.log(pos)


// source: https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_string_methods2

// Use the slice method to return the word "bananas".

var txt = "I can eat bananas all day";
var x = txt.slice(10 ,17);
console.log(x)


// source: https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_string_methods3

// Use the correct String method to replace the word "Hello" with the word "Welcome".


var txt = "Hello World";
txt = txt.replace("Hello", "Welcome");

console.log(txt)

//source: https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_string_methods4

// Convert the value of txt to upper case.

var txt = "Hello World";
console.log(txt.toUpperCase());