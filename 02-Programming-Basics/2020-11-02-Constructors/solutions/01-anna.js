function SquareSum(num1, num2, num3) {
  this.num1squared = num1 * num1;
  this.num2squared = num2 * num2;
  this.num3squared = num3 * num3;
  this.squaresum = function () {
    return this.num1squared + this.num2squared + this.num3squared;
  };
}

let newSum = new SquareSum(2, 3, 4);

console.log(newSum.squaresum());

function Calculator(num1, num2) {
  this.add = () => num1 + num2;
  this.subtract = () => num2 - num1;
  this.multiply = () => num1 * num2;
  this.divide = () => num2 / num1;
}

var obj = new Calculator(5, 10);
console.log(obj.add());
console.log(obj.subtract());
console.log(obj.multiply());
console.log(obj.divide());

function Student(marks1, marks2) {
  let _marks1 = marks1;
  let _marks2 = marks2;
  this.getMarks = function (markNumber) {
    if (markNumber === 1) return _marks1;
    if (markNumber === 2) return _marks2;
  };
  this.calcTotal = () => _marks1 + _marks2;
}
var student = new Student(60, 70);

console.log(student.getMarks(1));
console.log(student.getMarks(2));
console.log(student.calcTotal());
