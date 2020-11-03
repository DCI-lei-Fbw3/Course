// Factorial
function factorial(n) {
    if (n <= 1) return 1;
  
    return n * factorial(n - 1);
  }

  console.log(factorial(3));

  /* Break down

  (3<=1) so its false and we move to line 5 of code now

  3*factorial(3-1); --> function called within itself --> 3*factorial(2);
  
  3* [2*factorial(1)];
  3*[2*1] = 6 --> Answer */
  


  
  function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
      
    return fib(n - 1) + fib(n - 2);
  }

console.log(fib(10));

/* break down of fibonacci 
n = 3
fib (3-1) + fib(3-2); function called within itself
fib(2) + fib(1);  --> for fib(2) return statement will be executed(line 26), for fib(1) we have a return value of 1;
[fib(2-1) + fib(2-2)] + 1 --> function called again 
1 + 0 + 1 = 2 --> Answer    */


