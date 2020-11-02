# Exercise 1 

## Sum of Squares

A constructor function SquareSum(num1,num2,num3) is provided which takes three numbers as properties. You have to initialize them. The constructor function also contains a method squaresum(). Implement it in a way such that it computes the square of the three numbers and returns their sum.

**Sample Input**
2, 3, 4 ​

**Sample Output**
29

```javascript
function SquareSum(num1,num2,num3){
  //initialize properties here
  this.squaresum = function(){
    //write method definition here
    return 0
    }
}
```

## Calculator

A constructor function called `Calculator` is given with fields: `num1` and `num2`. You have to add the following methods to the constructor function:

`add()`: a method which returns the sum after the addition of `num1` and `num2`.

`subtract()`: a method which returns the subtraction of `num1` from `num2`

`multiply()`: a method which returns the multiplication of `num1` and `num2`.

`divide()`: a method which returns the division of `num2` by `num1`.

Sample 

var obj = new Calculator(5,10)
obj.add()
obj.subtract()
obj.multiply()
obj.divide()
Sample Output #
15
5
50
2