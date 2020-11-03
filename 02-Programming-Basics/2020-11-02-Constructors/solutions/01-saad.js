
//Q1
/* function SquareSum(num1,num2,num3){
    //initialize properties here
    this.number_1 = num1;
    this.number_2 = num2;
    this.number_3 = num3;
    this.squaresum = function(){
      //write method definition here
      return (this.number_1*this.number_1) + (this.number_2*this.number_2) + (this.number_3*this.number_3); 
      }
  }

  let sum = new SquareSum(2,3,4);
  console.log(sum.squaresum()); 
   */

  //Q2

  /* function Calculator(num1,num2){
    this.Number_1 = num1;
    this.Number_2 = num2;  
    this.add = function(){
          return this.Number_1 + this.Number_2;
      }

    this.substract = function(){
        return this.Number_2 - this.Number_1;
    }

    this.multiply = function(){
        return this.Number_1*this.Number_2;
    }
    this.divide = function(){
        return this.Number_2/this.Number_1;
    }
  }

  let Calcu = new Calculator(5,10);
  console.log("the sum is", Calcu.add()); 
  console.log("the difference is",Calcu.substract()); 
  console.log("the multiplication is",Calcu.multiply()); 
  console.log("the division is", Calcu.divide()); */ 


  //Q3

  function Student(marks1,marks2){
      
      this._MARKS1 = marks1;
      this._MARKS2  = marks2;
      this.getMarks = function(x){
        if(x == 1){
        return this._MARKS1; 
        }
        if(x == 2){
            return this._MARKS2;
            }
            else{
                return "wrong input";
            }
        
      }
      this.calcTotal = function(){
          return this._MARKS1 + this._MARKS2; 
      }
  }


let Student_1 = new Student(60,70);
console.log(Student_1.getMarks(1)); 
console.log(Student_1.getMarks(2)); 
console.log(Student_1.calcTotal()); 