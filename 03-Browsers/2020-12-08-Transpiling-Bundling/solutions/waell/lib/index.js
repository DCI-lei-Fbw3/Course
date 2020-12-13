"use strict";

var _percentage = require("./percentage.js");

var _aspectRatio = require("./aspect-ratio.js");

// Your code goes here!
var a;
var b;
var c;
var value; // Modulo

var modulo_1_value;
var modulo_2_value;
var modulo_result = document.getElementById("modulo_result");
document.getElementById("modulo_1").addEventListener("input", function (e) {
  modulo_1_value = e.target.value;
  modulo_result.value = (0, _percentage.modulo)(modulo_1_value, modulo_2_value);
});
document.getElementById("modulo_2").addEventListener("input", function (e) {
  modulo_2_value = e.target.value;
  modulo_result.value = (0, _percentage.modulo)(modulo_1_value, modulo_2_value);
}); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// percentage calculation

var percentage_1 = document.getElementById("percentage_1");
var percentage_2 = document.getElementById("percentage_2");
var percentage_result = document.getElementById("percentage_result");
percentage_1.addEventListener("input", function (e) {
  a = e.target.value;
});
percentage_2.addEventListener("input", function (e) {
  b = e.target.value;
  percentage_result.value = (0, _percentage.percentage)(a, b);
}); // percent of

var percentageOf_1 = document.getElementById("percentageOf_1");
var percentageOf_2 = document.getElementById("percentageOf_2");
var percentageOf_result = document.getElementById("percentageOf_result");
percentageOf_1.addEventListener("input", function (e) {
  a = e.target.value;
});
percentageOf_2.addEventListener("input", function (e) {
  b = e.target.value;
  percentageOf_result.value = (0, _percentage.percentageOf)(a, b);
}); // difference

var difference_1 = document.getElementById("difference_1");
var difference_2 = document.getElementById("difference_2");
var difference_result = document.getElementById("difference_result");
difference_1.addEventListener("input", function (e) {
  a = e.target.value;
});
difference_2.addEventListener("input", function (e) {
  b = e.target.value;
  difference_result.value = (0, _percentage.difference)(a, b);
}); // aspect ratio:

var original_width = document.getElementById("ratio_1");
var original_height = document.getElementById("ratio_2");
var new_width = document.getElementById("ratio_result-width");
var new_height = document.getElementById("ratio_result-height");
original_width.addEventListener("input", function (event) {
  a = event.target.value;
});
original_height.addEventListener("input", function (event) {
  b = event.target.value;
});
new_width.addEventListener("input", function (event) {
  c = event.target.value;
  value = (0, _aspectRatio.calculateAspectRatio)(a, b, c);
  new_height.value = value;
});
/* 
let currentValueOriginalWidth = original_width.addEventListener(
  "input",
  (e) => {
    return e.target.value;
  }
);

let currentValueOriginalHeight = original_height.addEventListener(
  "input",
  (e) => {
    return e.target.value;
  }
);
*/
// let foo = original_width.addEventListener('input', (e) => e.target.value);
// implicit return
// new_width.addEventListener('input', e => {
// })
// let implicit = original_width.addEventListener('input', (e) => e.target.value);
// implicit return
// let explicit = original_width.addEventListener('input', (e) => {
//     return e.target.value
// } );
// explicit return