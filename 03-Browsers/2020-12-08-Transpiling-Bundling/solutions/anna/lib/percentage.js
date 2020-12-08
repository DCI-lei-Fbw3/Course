"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function modulo(first, second) {
  return first % second;
}

function percentage(first, second) {
  return first * second / 100;
}

function percentageOf(first, second) {
  return first * 100 / second;
}

function difference(first, second) {
  var calc = second - first;
  return calc * 100 / first;
} //helper function for math operations


function doMathOp(id1, id2, resultId, operation) {
  var value1 = $("#".concat(id1))[0].value;
  var value2 = $("#".concat(id2))[0].value;
  var result;

  switch (operation) {
    case "modulo":
      result = modulo(value1, value2);
      break;

    case "percentage":
      result = percentage(value1, value2);
      break;

    case "percentageOf":
      result = percentageOf(value1, value2);
      break;

    case "difference":
      result = difference(value1, value2);
      break;
  }

  $("#".concat(resultId))[0].value = result;
}

var _default = doMathOp;
exports["default"] = _default;