"use strict";

var _percentage = require("./percentage.js");

var _aspectRatio = require("./aspect-ratio.js");

// Your code goes here!
var firstModulo;
document.querySelector("#modulo_1").addEventListener("input", function () {
  firstModulo = this.value;
});
var secondModulo;
document.querySelector("#modulo_2").addEventListener("input", function () {
  secondModulo = this.value;
  document.querySelector("#modulo_result").value = (0, _percentage.modulo)(firstModulo, secondModulo);
}); // percentage

var firstPercentage;
var secondPercentage;
document.querySelector("#percentage_1").addEventListener("input", function () {
  firstPercentage = this.value;
});
document.querySelector("#percentage_2").addEventListener("input", function () {
  secondPercentage = this.value;
  document.querySelector("#percentage_result").value = (0, _percentage.percentage)(firstPercentage, secondPercentage);
}); // percentageOf

var firstPercentOf;
var secondPercentOf;
document.querySelector("#percentageOf_1").addEventListener("click", function () {
  firstPercentOf = this.value;
});
document.querySelector("#percentageOf_2").addEventListener("click", function () {
  secondPercentOf = this.value;
  document.querySelector("#percentageOf_result").value = (0, _percentage.percentageOf)(firstPercentOf, secondPercentOf);
}); //difference

var firstDifference;
var secondDifference;
document.querySelector("#difference_1").addEventListener("click", function () {
  firstDifference = this.value;
});
document.querySelector("#difference_2").addEventListener("click", function () {
  secondDifference = this.value;
  document.querySelector("#difference_result").value = (0, _percentage.difference)(firstDifference, secondDifference);
}); // fixRoudinErrors

var ratio1 = document.querySelector("#ratio_1");
var ratio2 = document.querySelector("#ratio_2");
var ratioWidth = document.querySelector("#ratio_result-width");
var ratioHeight = document.querySelector("#ratio_result-height");
var ratio1Value;
ratio1.addEventListener("input", function () {
  ratio1Value = this.value;
});
var ratio2Value;
ratio2.addEventListener("input", function () {
  ratio2Value = this.value;
});
var newWidth;
ratioWidth.addEventListener("input", function () {
  newWidth = this.value;
  ratioHeight.value = (0, _aspectRatio.calculateAspectRatio)(ratio1Value, ratio2Value, newWidth);
});