"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _aspectRatio = require("./aspect-ratio.js");

var math = _interopRequireWildcard(require("./percentage.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Your code goes here!
$(function () {
  $(".operand").change(function () {
    calculateAll(this);
  });

  var calculateAll = function calculateAll(val) {
    if (val.className.includes("arithmetic")) $("#modulo_result")[0].value = math.modulo($("#modulo_1")[0].value, $("#modulo_2")[0].value);else if (val.className.includes("percentageBy")) $("#percentageBy_result")[0].value = math.percentage($("#percentageBy_1")[0].value, $("#percentageBy_2")[0].value);else if (val.className.includes("percentageOf")) $("#percentageOf_result")[0].value = math.percentageOf($("#percentageOf_1")[0].value, $("#percentageOf_2")[0].value);else if (val.className.includes("difference")) $("#difference_result")[0].value = math.difference($("#difference_1")[0].value, $("#difference_2")[0].value);
  };

  $(".ratio.result").on("input", function (event) {
    var _ref = [$("#ratio_1")[0].value, $("#ratio_2")[0].value],
        val1 = _ref[0],
        val2 = _ref[1];

    if (event.target.id === "ratio_result-height") {
      $("#ratio_result-width")[0].value = (0, _aspectRatio.calculateAspectRatio)(val1, val2, $("#ratio_result-height")[0].value, "h");
    } else {
      $("#ratio_result-height")[0].value = (0, _aspectRatio.calculateAspectRatio)(val1, val2, $("#ratio_result-width")[0].value, "w");
    }
  });
});