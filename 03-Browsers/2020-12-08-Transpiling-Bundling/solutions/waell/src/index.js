// Your code goes here!

import { modulo, percentage, percentageOf, difference } from "./percentage.js";
import { calculateAspectRatio } from "./aspect-ratio.js";

let a;
let b;
let c;
let value;

// Modulo

let modulo_1_value;
let modulo_2_value;
let modulo_result = document.getElementById("modulo_result");

document.getElementById("modulo_1").addEventListener("input", (e) => {
  modulo_1_value = e.target.value;
  modulo_result.value = modulo(modulo_1_value, modulo_2_value);

});

document.getElementById("modulo_2").addEventListener("input", (e) => {
  modulo_2_value = e.target.value;
  modulo_result.value = modulo(modulo_1_value, modulo_2_value);
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

// percentage calculation

let percentage_1 = document.getElementById("percentage_1");
let percentage_2 = document.getElementById("percentage_2");
let percentage_result = document.getElementById("percentage_result");

percentage_1.addEventListener("input", (e) => {
  a = e.target.value;
});

percentage_2.addEventListener("input", (e) => {
  b = e.target.value;
  percentage_result.value = percentage(a, b);
});

// percent of

let percentageOf_1 = document.getElementById("percentageOf_1");
let percentageOf_2 = document.getElementById("percentageOf_2");
let percentageOf_result = document.getElementById("percentageOf_result");

percentageOf_1.addEventListener("input", (e) => {
  a = e.target.value;
});

percentageOf_2.addEventListener("input", (e) => {
  b = e.target.value;
  percentageOf_result.value = percentageOf(a, b);
});

// difference

let difference_1 = document.getElementById("difference_1");
let difference_2 = document.getElementById("difference_2");
let difference_result = document.getElementById("difference_result");

difference_1.addEventListener("input", (e) => {
  a = e.target.value;
});

difference_2.addEventListener("input", (e) => {
  b = e.target.value;
  difference_result.value = difference(a, b);
});

// aspect ratio:

let original_width = document.getElementById("ratio_1");
let original_height = document.getElementById("ratio_2");
let new_width = document.getElementById("ratio_result-width");
let new_height = document.getElementById("ratio_result-height");

original_width.addEventListener("input", (event) => {
  a = event.target.value;
});

original_height.addEventListener("input", (event) => {
  b = event.target.value;
});

new_width.addEventListener("input", (event) => {
  c = event.target.value;
  value = calculateAspectRatio(a, b, c);
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
