//Taimur's solutions to the constructor exercise 01

//1

function SquareSum(num1,num2,num3){
    this.num1 = num1
    this.num2 = num2
    this.num3 = num3
    this.squaresum = function(){
      this.num1 = this.num1*this.num1
      this.num2 = this.num2*this.num2
      this.num3 = this.num3*this.num3
      this.answer = this.num1+this.num2+this.num3
      return this.answer
    }
  }

  //2
  
  function Calculator(num1,num2) {
  
    this.num1 = num1
    this.num2 = num2
 
   // Addition Method
   this.add = function() {
     return this.num1 + this.num2
   }
 
   // Subtraction Method
   this.subtract = function() {
     return this.num2 - this.num1
   }
   // Multiplication Method
   this.multiply = function() {
     return this.num1 * this.num2;
   }
 
 // Divison Method
   this.divide = function() {
     return this.num2 / this.num1;
   }
 }


 //3

 function Student(marks1,marks2) {

    //Define and initialize both private properties here
    var _marks1 = marks1
    var _marks2 = marks2
  
  
    //Define the getMarks function on Student prototype here
    Student.prototype.getMarks = function(markNumber) {
      
      if(markNumber == 1)
        return _marks1
      else if(markNumber == 2)
        return _marks2
    }
    
    //Define the calcTotal function on Student prototype here
    Student.prototype.calcTotal = function() {
      // Write definition here
      this.totalMarks = _marks1 + _marks2
      return this.totalMarks
    }
  }