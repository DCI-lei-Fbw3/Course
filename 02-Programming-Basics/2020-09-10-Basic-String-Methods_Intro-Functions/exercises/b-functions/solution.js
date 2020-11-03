/*# Declaring Functions

#### 1. Multiply - Function Declaration
* Create a function that multiples a number by another number.


#### 2. Multiply - Function Declarations as Values
* Rework the syntax of the above function so that the function declaration is stored as a value.

#### 3. Multiply - Arrow Function
* Rework the syntax of the function declaration so that is uses the arrow function shorthand.

#### 4. Declarations
* Create functions (using all three declarations) to check the remainder of divisionm given two numbers.*/

/* function mul(x, y) {
   return x * y;
}

result = mul(2, 5);
console.log(result);

const mult= (x, y)=>{
    let result =  x * y    
    return result
}
 result = mult(2,5)
console.log(result) */

function rem(num_1, num_2) {
  return num_1 % num_2;
}
result = rem(10, 5);
console.log(result);
