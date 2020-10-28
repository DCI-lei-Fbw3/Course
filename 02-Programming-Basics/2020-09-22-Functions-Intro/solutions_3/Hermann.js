/*

#### 1. Print Exponential Values
* Write a function that accepts two numbers and validate that they are numbers. 

After that, the function should print _y_ exponential values starting from _x_.

* For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
* function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2.
*/
function number(nber1,nber2){
    let result = 1;
    for(let i=0 ; i<nber2; i++){
     result = result * nber1
     console.log(result)
    }
}
number(3,5)
number(2,8)

/*
#### 2. Fruits
* Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_".
*/
let fruit = "Orange"
function printFavoriteFruit(){
    console.log(`My favorite fruit is: ${fruit}`)
}
printFavoriteFruit()

/*
#### 3. Multiply a Number by Itself
* Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`. 
* Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.
*/

function exponent(nber1,nber2){
    let result= Math.pow(nber1,nber2);
}
console.log (result);
// exponent(3,2)

// first if access the variable result outside the scope it will say the variable result is not defined 
// secondly if we use var instead using let it will print undefined but to solve this issue, we have to return result in the scope and then put console.log(result) after the scope.