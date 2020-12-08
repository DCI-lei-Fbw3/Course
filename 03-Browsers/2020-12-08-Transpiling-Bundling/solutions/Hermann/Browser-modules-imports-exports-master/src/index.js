// Your code goes here!
import {
  modulo as modulo1,
  percentage as percentage1,
  percentageOf as percentageOf1,
  difference as difference1,
} from "./percentage.js";
import {
  fixRoundingErrors as fixRoundingErrors1,
  calculateAspectRatio as calculateAspectRatio1,
} from "./aspect-ratio.js";

let firstModulo;
document.querySelector("#modulo_1").addEventListener("input", function () {
  firstModulo = this.value;
});

let secondModulo;
document.querySelector("#modulo_2").addEventListener("input", function () {
  secondModulo = this.value;
  document.querySelector("#modulo_result").value = modulo1(
    firstModulo,
    secondModulo
  );
});

// percentage
let firstPercentage;
let secondPercentage;
document.querySelector("#percentage_1").addEventListener("input", function () {
  firstPercentage = this.value;
});

document.querySelector("#percentage_2").addEventListener("input", function () {
  secondPercentage = this.value;
  document.querySelector("#percentage_result").value = percentage1(
    firstPercentage,
    secondPercentage
  );
});
// percentageOf
let firstPercentOf;
let secondPercentOf;
document
  .querySelector("#percentageOf_1")
  .addEventListener("click", function () {
    firstPercentOf = this.value;
  });
document
  .querySelector("#percentageOf_2")
  .addEventListener("click", function () {
    secondPercentOf = this.value;
    document.querySelector("#percentageOf_result").value = percentageOf1(
      firstPercentOf,
      secondPercentOf
    );
  });

//difference

let firstDifference;
let secondDifference;
document.querySelector("#difference_1").addEventListener("click", function () {
  firstDifference = this.value;
});
document.querySelector("#difference_2").addEventListener("click", function () {
  secondDifference = this.value;
  document.querySelector("#difference_result").value = difference1(
    firstDifference,
    secondDifference
  );
});

// fixRoudinErrors

let ratio1 = document.querySelector("#ratio_1");
let ratio2 = document.querySelector("#ratio_2");
let ratioWidth = document.querySelector("#ratio_result-width");
let ratioHeight = document.querySelector("#ratio_result-height");
let ratio1Value;
ratio1.addEventListener("input", function () {
  ratio1Value = this.value;
});
let ratio2Value;
ratio2.addEventListener("input", function () {
  ratio2Value = this.value;
});
let newWidth;
ratioWidth.addEventListener("input", function () {
  newWidth = this.value;
  ratioHeight.value = calculateAspectRatio1(ratio1Value, ratio2Value, newWidth);
});
