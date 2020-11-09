// # Math Library

// Create a library offering mathematical functions.

// The development shall be test driven.

// That is implement a test before the actual functionality.

// Let the tests run whenever needed.

// ## Functionality

// -   difference(a: number, b: number): number
// -   sum(a: number,b: number): number
// -   product(a: number, b: number): number
// -   quotient(a: number, b: number): number
// -   remainder(a: number, b: number): number
// -   abs(a: number): number # returns the distance from 0, that is the absolute value, a negative number must be changed to positive.
// -   pow(base: number, exponent: number): number
//     Raises the "base" to the power of "exponent"
function difference(a, b) {
    return Math.abs(a-b);
  }
  module.exports = difference;

function sum(a, b) {
    return a + b;
  }
  module.exports = sum;

function product(a, b) {
    return a * b;
  }
  module.exports = product;

function quotient(a, b) {
    return a / b;
  }
  module.exports = quotient;

function remainder(a, b) {
    return a % b;
  }
  module.exports = remainder;

function abs(a) {
    return Math.abs(a);
  }
  module.exports = abs;  

function pow(a, b) {
    return a**b;
  }
  module.exports = pow;

