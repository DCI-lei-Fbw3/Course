// # Exercises
console.warn('**************************** 1. ## Sum of Squares*****************************');
// 1. ## Sum of Squares

// A constructor function SquareSum(num1,num2,num3) is provided which takes three numbers as properties. You have to initialize them. The constructor function also contains a method squaresum(). Implement it in a way such that it computes the square of the three numbers and returns their sum.

// **Sample Input**
// 2, 3, 4 ​

// **Sample Output**
// 29

// ```javascript
// function SquareSum(num1,num2,num3){
//   //initialize properties here
//   this.squaresum = function(){
//     //write method definition here
//     return 0
//     }
// }
// ```

function SquareSum(num1,num2,num3){
       //initialize properties here
       this.num1 = num1;
       this.num2 = num2;
       this.num3 = num3;
       this.squaresum = function(){
         //write method definition here
        return num1 * num1 + num2 * num2 + num3 * num3;
         }
     }

    let sum = new SquareSum(2,3,4);
    console.log(sum.squaresum());

console.warn('**************************** 2. ## Calculator*****************************');


// 2. ## Calculator

// A constructor function called `Calculator` is given with fields: `num1` and `num2`. You have to add the following methods to the constructor function:

// `add()`: a method which returns the sum after the addition of `num1` and `num2`.

// `subtract()`: a method which returns the subtraction of `num1` from `num2`

// `multiply()`: a method which returns the multiplication of `num1` and `num2`.

// `divide()`: a method which returns the division of `num2` by `num1`.

// **Sample Input**

// ```javascript
// var obj = new Calculator(5,10)
// obj.add()
// obj.subtract()
// obj.multiply()
// obj.divide()
// ```

// **Sample Output**

// ```
// 15
// 5
// 50
// 2
// ```

// ```javascript
// function Calculator(num1,num2) {

//   //initialize properties

//   // Addition Method

//   // Subtraction Method

//   // Multiplication Method

//   // Divison Method

// }
// ```

 function Calculator(num1,num2) {

    // initialize properties
    this.num1 = num1;
    this.num2 = num2;
    // Addition Method
    this.add = function(){
        return num1 + num2;
    }
    // Subtraction Method
    this.subtract = function(){
        return num2 - num1;
       }
    // Multiplication Method
    this.multiply = function(){
        return num1 * num2;
      }
    // Divison Method
    this.divide = function(){
        return num2 / num1;
      }
 }

 let obj = new Calculator(5,10);
 console.log(obj.add()+"\n"+obj.subtract()+"\n"+obj.multiply()+"\n"+obj.divide());


console.warn('******************* 3. ## Calculate the Students Total Marks*********');

// 3. ## Calculate the Students' Total Marks

// A constructor function called Student is given with the following parameters:

// - `marks1`
// - `marks2`

// ```
// Important Note: Both marks1 and marks2 should be assigned to protected variables, _marks1 and _marks2, during initialization. More on private Variables:https://philipwalton.com/articles/implementing-private-and-protected-members-in-javascript/

// ```
// Next, you have to define the following methods such that they can be shared by all object instances created:

// `getMarks(markNumber)`: a method which should return `_marks1` if `markNumber` equals 1 and `_marks2` if markNumber equals 2.

// `calcTotal()`: the method should return the sum of `_marks1` and `_marks2`.

// **Sample Input**

// ```javascript
// var student = new Student(60,70)
// ```

// **Sample Output**

// ```
// getMarks(1)  => 60
// getMarks(2)  => 70
// calcTotal() => 130
// ```

// ```javascript
// function Student(marks1,marks2) {

//   //Define and initialize both private properties here

//   //Define the getMarks function on Student prototype here

//   //Define the calcTotal function on Student prototype here
// }
// ```


 function Student(_marks1,_marks2) {
   //Define and initialize both private properties here
    this.marks1 = _marks1; 
    this.marks2 = _marks2; 

   //Define the getMarks function on Student prototype here
  this.getMarks = function(markNumber){
  if(markNumber === 1) return _marks1;
  if(markNumber === 2) return _marks2;
  else return markNumber;
  }
   //Define the calcTotal function on Student prototype here
   this.calcTotal = function(){
      return _marks1 + _marks2;
  }
 }

 let student = new Student(60,70);
 console.log(student.getMarks(3)) // if I use any other number, this number will be printed but 1 will print 60 and 2 will print 70.
 console.log(student.getMarks(1))
 console.log(student.getMarks(2))
 console.log(student.calcTotal())
