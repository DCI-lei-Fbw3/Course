"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modulo = modulo;
exports.percentage = percentage;
exports.percentageOf = percentageOf;
exports.difference = difference;

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