// Length of a String
function length(str){
  //base case
    if(!str) return 0;
  //recursion
  return 1 + length(str.substring(1));
}
length("abc")

/* 
1. the arg is not empty so base case is false
    - NOT operator: 
                    n1 = !''                 // !f returns true
                    n2 = !'Cat'              // !t returns false

2. In JavaScript the substring() method returns a string beginning at the specified location. 
In the substring method: substring(initialVal, endVal*)

*the endVal is optional


"Fuller" version:

function length(str){
  if (str == ''){
    return 0;
  }
  const substr = str.substring(1);
  return length(substr) + 1;
}

console.log(length('abc'));

So given input "abc", the steps of execution are as below:

Check 'abc' == '' ==> false.    //line 36 till line 45, length() is winding up
Create substr = 'bc'.
Invoke length('bc'):
    Check 'bc' == '' ==> false.
    Create substr = 'c'.
    Invoke length('c'):
        Check 'c' == '' ===> false.
        Create substr = ''. //substring will take out the single string if its only a single value
        Invoke length(''):
            Check '' == '' ===> true
            Return 0.
        Operate 0 + 1.
        Returns 1.
    Operate 1 + 1.
    Return 2.
Operate 2 + 1.
Return 3.

*/

// Reverse a string
function reverse(str){
  //base case
    if(!str) return "";
  //recursive
  return reverse(str.substring(1)) + str[0];
}
reverse('cat');
/* 

‘cat’.substr(1) === ‘at’
str[0] gives us the character at that index in the string. Thus cat[0] === 'c'

return revStr(str.substr(1)) + str[0];
// SAME AS
return revStr('at') + 'c'

Our recursive case is run again:

return revStr(str.substr(1)) + str[0];
// SAME AS
return revStr('t') + 'a'

Our recursive case is run one final time:
return revStr(str.substr(1)) + str[0];
// SAME AS
return revStr('') + 't'

// This is where the function has wound up

This time our base case runs, and the function returns a blank string:
if (str === '') return '';

Now that our function has returned, everything will ‘unwind’ and return in order:
return ‘’ + ‘t’ + ‘a’ + ‘c’
// tac

*/

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

console.log(fib(4));