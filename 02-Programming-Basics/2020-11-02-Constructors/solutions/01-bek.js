// 1. ## Sum of Squares

let result = new SquareSum(2, 3, 4);

function SquareSum(num1, num2, num3) {
  //initialize properties here
  this.number1 = num1 ** 2;
  this.number2 = num2 ** 2;
  this.number3 = num3 ** 2;
  SquareSum.prototype.sum = function () {
    return this.number1 + this.number2 + this.number3;
  };
}

console.log(result.sum());

// <!-- 2. ## Calculator
var obj = new Calculator(5, 10);

function Calculator(num1, num2) {
  //initialize properties
  this.num1 = num1;
  this.num2 = num2;

  // Addition Method
  Calculator.prototype.add = function () {
    return this.num1 + this.num2;
  };
  Calculator.prototype.subtract = function () {
    return this.num2 - this.num1;
  };
  Calculator.prototype.multiply = function () {
    return this.num1 * this.num2;
  };
  Calculator.prototype.divide = function () {
    return this.num2 / this.num1;
  };
  // Subtraction Method
  // Multiplication Method
  // Divison Method
}
console.log(obj);
console.log(obj.add());
console.log(obj.subtract());
console.log(obj.multiply());
console.log(obj.divide());

// 3. ## Calculate the Students' Total Marks

var student = new Student(60, 70);

function Student(marks1, marks2) {
  this.mark1 = marks1;
  this.mark2 = marks2;
  Student.prototype.getMarks = function (number) {
    if (number === 1) console.log(this.mark1);
    if (number === 2) console.log(this.mark2);
  };

  Student.prototype.calcTotal = function () {
    return this.mark1 + this.mark2;
  };
}

console.log(student.getMarks(1));
console.log(student.getMarks(2));
console.log(student.calcTotal());
