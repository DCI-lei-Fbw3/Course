// # Declaring Functions

// #### 1. Multiply - Function Declaration
// * Create a function that multiples a number by another number.

function timesNum(number1, number2) {
  return number1 * number2;
}

// #### 2. Multiply - Function Declarations as Values
// * Rework the syntax of the above function so that the function declaration is stored as a value.

const multNum = function (num1, num2) {
  return num1 * num2;
};

// #### 3. Multiply - Arrow Function
// * Rework the syntax of the function declaration so that is uses the arrow function shorthand.

const multiplyNum = (no1, no2) => {
  return no1 * no2;
};

// #### 4. Declarations
// * Create functions (using all three declarations) to check the remainder of division given two numbers.

function calcRemainder(a, b) {
  return a % b;
}

const calcRemain = function (x, y) {
  return x % y;
};

const findRemainder = (first, second) => {
  return first % second;
};
