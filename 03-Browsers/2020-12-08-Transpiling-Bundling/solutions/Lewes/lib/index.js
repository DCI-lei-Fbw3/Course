"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _aspectRatio = require("./aspect-ratio.js");

var math = _interopRequireWildcard(require("./percentage.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Your code goes here!
//!Exercise it taken from the day before (2020-12-07-Modules/Lewes) for comments and understandability 
//!Modulo
var modulo = document.querySelectorAll('.arithmetic.operand.form-control');
modulo.forEach(function (e) {
  e.addEventListener('change', function () {
    var valueOne = parseInt(modulo[0].value);
    var valueTwo = parseInt(modulo[1].value);
    var output = document.querySelector('#modulo_result');
    output.value = math.modulo(valueOne, valueTwo);
    console.log(output.value);
  });
}); //!Percentage

var perc = document.querySelectorAll('.percentage.operand.form-control');
perc.forEach(function (e) {
  e.addEventListener('input', function () {
    var valueOne = parseInt(perc[0].value);
    var valueTwo = parseInt(perc[1].value);
    var output = document.getElementById('percentage_result');
    output.value = math.percentage(valueOne, valueTwo);
  });
}); //!PercentageOf

var percOf = document.querySelectorAll('.percentageOf.operand.form-control');
percOf.forEach(function (e) {
  e.addEventListener('change', function () {
    var valueOne = parseInt(percOf[0].value);
    var valueTwo = parseInt(percOf[1].value);
    var output = document.getElementById('percentageOf_result');
    output.value = math.percentageOf(valueOne, valueTwo);
  });
}); //!Difference

var diff = document.querySelectorAll('.difference.operand.form-control');
diff.forEach(function (e) {
  e.addEventListener('change', function () {
    var valueOne = parseInt(diff[0].value);
    var valueTwo = parseInt(diff[1].value);
    var output = document.getElementById('difference_result');
    output.value = math.difference(valueOne, valueTwo);
  });
}); //!Saad-Help

var value_1 = document.getElementById("ratio_1");
var value_2 = document.getElementById("ratio_2");
var value_3 = document.getElementById("ratio_result-width");
var value_4 = document.getElementById('ratio_result-height');
var a;
var b;
var c;
var value;
value_1.addEventListener("input", function (event) {
  a = event.target.value;
});
value_2.addEventListener("input", function (event) {
  b = event.target.value;
});
value_3.addEventListener("input", function (event) {
  c = event.target.value;
  value = (0, _aspectRatio.calculateAspectRatio)(a, b, c);
  value_4.value = value;
}); //!Tests for Transpiler:

console.log(math.percOf(1, 10)); //-->Expected- 10

console.log(math.percOf(5, 20)); //-->Expected- 25

console.log(math.modulo(11, 2)); //-->Expected- 1