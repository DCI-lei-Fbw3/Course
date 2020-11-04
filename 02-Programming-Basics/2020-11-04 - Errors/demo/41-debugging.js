// source:
// https://www.w3schools.com/jsref/jsref_debugger.asp

var x = 15 * 5;
debugger; // the debugger statement
document.getElementById("demo").innerHTML = x;

console.log("before breakpoint");
debugger;
console.log("after breakpoint");
