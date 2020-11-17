/* const difference = (a, b) => {
  let result = a - b;
  if (result < 0) return result * -1;
  else return result;
}; */

const difference = (a, b) => {
  return Math.abs(a - b);
};

function pow(x, y) {
  return x ** y;
}

function abs(a) {
  return Math.abs(a);
}

function product(a, b) {
  return a * b;
}

function quotient(a, b) {
  return a / b;
}

function remainder(a, b) {
  return a % b;
}

function sum(a, b) {
  return a + b;
}

module.exports = { difference, product, quotient, remainder, sum, pow, abs }; //export multiple functions to test file
