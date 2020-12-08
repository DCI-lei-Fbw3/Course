"use strict";

var _aspectRatio = _interopRequireDefault(require("./aspect-ratio.js"));

var _percentage = _interopRequireDefault(require("./percentage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Your code goes here!
//Created helper function in "./percentage.js" as default export
//Modulo
$(".arithmetic.operand.form-control").change(function () {
  (0, _percentage["default"])("modulo_1", "modulo_2", "modulo_result", "modulo");
}); //Percentage

$(".percentage.operand.form-control").change(function () {
  (0, _percentage["default"])("percentage_1", "percentage_2", "percentage_result", "percentage");
}); //PercentageOf

$(".percentageOf.operand.form-control").change(function () {
  (0, _percentage["default"])("percentageOf_1", "percentageOf_2", "percentageOf_result", "percentageOf");
}); //Difference

$(".difference.operand.form-control").change(function () {
  (0, _percentage["default"])("difference_1", "difference_2", "difference_result", "difference");
}); //Aspect Ratio Calculations

$(".ratio.form-control").change(function (event) {
  var originalWidth = $("#ratio_1")[0].value;
  var originalHeight = $("#ratio_2")[0].value;

  if (event.target.id === "ratio_result-width") {
    var newWidth = $("#ratio_result-width")[0].value;
    $("#ratio_result-height")[0].value = (0, _aspectRatio["default"])(originalWidth, originalHeight, newWidth, "w");
  } else if (event.target.id === "ratio_result-height") {
    var newHeight = $("#ratio_result-height")[0].value;
    var result = (0, _aspectRatio["default"])(originalWidth, originalHeight, newHeight, "h");
    $("#ratio_result-width")[0].value = result;
  }
});