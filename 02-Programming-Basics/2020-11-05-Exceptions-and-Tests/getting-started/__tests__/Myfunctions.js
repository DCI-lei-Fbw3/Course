function sum(num1, num2) {
    return num1 + num2;
  }
  function difference(num1, num2) {
    return num2 - num1;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function quotient(num1, num2) {
    return Math.floor(num1 / num2);
  }
  
  function remainder(num1, num2) {
    return num1 % num2;
  }
  
  function abs(num1) {
    return Math.abs(num1);
  }
  
  function pow(num1,num2) {return Math.pow(num1,num2)};


  module.exports = {sum, difference, multiply, quotient, remainder, abs, pow}; 