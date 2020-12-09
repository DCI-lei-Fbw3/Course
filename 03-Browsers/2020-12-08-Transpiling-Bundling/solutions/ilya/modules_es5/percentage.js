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
}

var _default = {
  modulo: modulo,
  percentage: percentage,
  percentageOf: percentageOf,
  difference: difference
};
exports["default"] = _default;