"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateAspectRatio = calculateAspectRatio;

function fixRoundingErrors(_float) {
  return parseFloat(_float.toFixed(2));
}

function calculateAspectRatio(originalWidth, originalHeight, newValue, valueType) {
  if (originalHeight <= 0 || originalWidth <= 0 || newValue <= 0) {
    return 0;
  }

  var formula = valueType === "h" ? originalWidth / originalHeight : originalHeight / originalWidth;
  return fixRoundingErrors(formula * newValue);
}