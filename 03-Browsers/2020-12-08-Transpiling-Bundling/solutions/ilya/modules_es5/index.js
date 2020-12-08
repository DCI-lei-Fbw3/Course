"use strict";

var _percentage = _interopRequireDefault(require("./percentage.js"));

var _aspectRatio = _interopRequireDefault(require("./aspect-ratio.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Your code goes here!
var modulo1 = document.getElementById('modulo_1');
var modulo2 = document.getElementById('modulo_2');
var moduloResult = document.getElementById('modulo_result');
var percentage1 = document.getElementById('percentage_1');
var percentage2 = document.getElementById('percentage_2');
var percentageResult = document.getElementById('percentage_result');
var percentageOf1 = document.getElementById('percentageOf_1');
var percentageOf2 = document.getElementById('percentageOf_2');
var percentageOfResult = document.getElementById('percentageOf_result');
var difference1 = document.getElementById('difference_1');
var difference2 = document.getElementById('difference_2');
var differenceResult = document.getElementById('difference_result');
var ratio1 = document.getElementById('ratio_1');
var ratio2 = document.getElementById('ratio_2');
var ratioResultWidth = document.getElementById('ratio_result-width');
var ratioResultHeight = document.getElementById('ratio_result-height');
modulo1.addEventListener('change', function (e) {
  moduloResult.value = _percentage["default"].modulo(modulo1.value, modulo2.value);
});
modulo2.addEventListener('change', function (e) {
  moduloResult.value = _percentage["default"].modulo(modulo1.value, modulo2.value);
});
percentage1.addEventListener('change', function (e) {
  percentageResult.value = _percentage["default"].percentage(percentage1.value, percentage2.value);
});
percentage2.addEventListener('change', function (e) {
  percentageResult.value = _percentage["default"].percentage(percentage1.value, percentage2.value);
});
percentageOf1.addEventListener('change', function (e) {
  percentageOfResult.value = _percentage["default"].percentageOf(percentageOf1.value, percentageOf2.value);
});
percentageOf2.addEventListener('change', function (e) {
  percentageOfResult.value = _percentage["default"].percentageOf(percentageOf1.value, percentageOf2.value);
});
difference1.addEventListener('change', function (e) {
  differenceResult.value = _percentage["default"].difference(difference1.value, difference2.value);
});
difference2.addEventListener('change', function (e) {
  differenceResult.value = _percentage["default"].difference(difference1.value, difference2.value);
});
difference1.addEventListener('change', function (e) {
  differenceResult.value = _percentage["default"].difference(difference1.value, difference2.value);
});
difference2.addEventListener('change', function (e) {
  differenceResult.value = _percentage["default"].difference(difference1.value, difference2.value);
});
ratio1.addEventListener('change', function (e) {
  ratioResultWidth.value = _aspectRatio["default"].calculateAspectRatio(ratio1.value, ratio2.value, ratioResultHeight.value, 'h');
});
ratio2.addEventListener('change', function (e) {
  ratioResultHeight.value = _aspectRatio["default"].calculateAspectRatio(ratio1.value, ratio2.value, ratioResultWidth.value, 'w');
});
ratioResultWidth.addEventListener('change', function (e) {
  ratioResultHeight.value = _aspectRatio["default"].calculateAspectRatio(ratio1.value, ratio2.value, ratioResultWidth.value, 'w');
});
ratioResultHeight.addEventListener('change', function (e) {
  ratioResultWidth.value = _aspectRatio["default"].calculateAspectRatio(ratio1.value, ratio2.value, ratioResultHeight.value, 'h');
});