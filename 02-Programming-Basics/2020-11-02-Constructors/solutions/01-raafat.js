// !Sum of Squares
function SquareSum(num1, num2, num3) {
	this.num1 = num1;
	this.num2 = num2;
	this.num3 = num3;
	this.squareSum = function () {
		return this.num1 ** 2 + this.num2 ** 2 + this.num3 ** 2;
	};
}
const someNumber = new SquareSum(2, 3, 4);
console.log(someNumber.squareSum());

// !Calculator
function Calculator(number1, number2) {
	this.number1 = number1;
	this.number2 = number2;
	this.add = function () {
		return this.number1 + this.number2;
	};
	this.subtract = function () {
		return Math.abs(this.number1 - this.number2);
	};
	this.multiply = function () {
		return this.number1 * this.number2;
	};
	this.divide = function () {
		return this.number1 > this.number2
			? this.number1 / this.number2
			: this.number2 / this.number1;
	};
}
var obj = new Calculator(5, 10);
console.log(obj.add());
console.log(obj.subtract());
console.log(obj.multiply());
console.log(obj.divide());

// !Calculate the Students' Total Marks
function Student(_mark1, _mark2) {
	this.mark1 = _mark1;
	this.mark2 = _mark2;
	this.showMark = function (number) {
		if (number === 1) return this.mark1;
		else if (number === 2) return this.mark2;
	};
	this.calcTotal = function () {
		return this.mark1 + this.mark2;
	};
}
const student = new Student(60, 70);
console.log(student.showMark(1));
console.log(student.showMark(2));
console.log(student.calcTotal());
