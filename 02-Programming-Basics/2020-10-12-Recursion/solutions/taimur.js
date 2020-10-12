// Length of a String
function length(str){
    if(!str) return 0;
    
    return 1 + length(str.substring(1));
  }
  
  // Reverse a string
  function reverse(str){
    if(!str) return "";
    
    return reverse(str.substring(1)) + str[0];
  }
  
  // Factorial
  function factorial(n) {
    if (n <= 1) return 1;
  
    return n * factorial(n - 1);
  }
  
  // Fibonacci
  function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
      
    return fib(n - 1) + fib(n - 2);
  }