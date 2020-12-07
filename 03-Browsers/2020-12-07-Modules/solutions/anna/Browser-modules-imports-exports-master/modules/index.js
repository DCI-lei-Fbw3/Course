// Your code goes here!

import calcAspectRatio from "./aspect-ratio.js";
import doMathOp from "./percentage.js"; //Created helper function in "./percentage.js" as default export

//Modulo
$(".arithmetic.operand.form-control").change(function () {
  doMathOp("modulo_1", "modulo_2", "modulo_result", "modulo");
});

//Percentage
$(".percentage.operand.form-control").change(function () {
  doMathOp("percentage_1", "percentage_2", "percentage_result", "percentage");
});

//PercentageOf
$(".percentageOf.operand.form-control").change(function () {
  doMathOp(
    "percentageOf_1",
    "percentageOf_2",
    "percentageOf_result",
    "percentageOf"
  );
});

//Difference
$(".difference.operand.form-control").change(function () {
  doMathOp("difference_1", "difference_2", "difference_result", "difference");
});

//Aspect Ratio Calculations
$(".ratio.form-control").change(function (event) {
  let originalWidth = $("#ratio_1")[0].value;
  let originalHeight = $("#ratio_2")[0].value;

  if (event.target.id === "ratio_result-width") {
    const newWidth = $("#ratio_result-width")[0].value;

    $("#ratio_result-height")[0].value = calcAspectRatio(
      originalWidth,
      originalHeight,
      newWidth,
      "w"
    );
  } else if (event.target.id === "ratio_result-height") {
    const newHeight = $("#ratio_result-height")[0].value;
    const result = calcAspectRatio(
      originalWidth,
      originalHeight,
      newHeight,
      "h"
    );

    $("#ratio_result-width")[0].value = result;
  }
});
