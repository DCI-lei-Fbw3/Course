// # Recursion Exercises

// <!-- Please go to the Edabit collection below and work on all _4_ exercises.

// https://edabit.com/collection/AmLf5WfbDLPAqx3gC


// Submit the solutions in a single file as __<your first names>.js__  -->

// 1. Recursion: Length of a String

const checkLength = (str) => {
        if (str=="") {
            return null;
        }
        else {
            let i=0;
            str=str.substr(1);
            i++;            
            return checkLength(str)+i;            
        }                  
    }

console.log(checkLength("oyixuflakslesrjasfoianiusdhuwhjer82347093ha988tq2349857hefpfps9shfq43ro"));

//Taimur method:
// function length(str) {
//     //base case
//     if(!str) return 0;
//     //recursion
//     return 1 + length(str.substring(1));
// }

// length("abc");

/*2. Recursion: reversed String.*/
const stringReversal = (str) => {
    if (str==="") {
        return "";
    }
    else {
        return stringReversal(str.substr(1)) + str[0];//str.charAt(0);
    }    
}
console.log(stringReversal("Hello"));
console.log(stringReversal("Dog"));

/*3. Factorials: 
const checkFactorials = (number) => { //number has to be positive, check the condition;
    if (number<0) {
        return false;
    }
    else if (number==0) {//if the number is 0, just set it to 0;
        return 1;
    }
    else {
        return (number*checkFactorials(number-1));
    }
}
console.log(checkFactorials(15));*/

//Taimur's code:
function factorial(n) {
  if (n <= 1) return 1;

  return n * factorial(n - 1);
}

/* What is the base of the resursive function?

The base of the factorial is (1) n has to be positive; (2) n is expected to be reduced down to 1 as the base number of the last factorial number.

The first time it runs is (take n=5 as example)
1. return 5*factorial (4) = 5*4
2. return 4*factorial (3) = 4*3
3. return 3*factorial (2) = 3*2
2. return 2*factorial (1) = 2*1

At the end it is 5*4*3*2*1, when n reaches the base condition, it stops and returns the whole caculation.

/*4. Fibonacci Number*/

//Taimur's code:
const fib = (n) => {
    if (n<2) {
        return n;
    }
    else {
        return fib(n-1)+fib(n-2); 
    }
}
console.log(fib(8));

// For Fibonnacci number, n has to be larger than 2, as F(0) and F(1) does not get into the recurrence pattern
// Therefore, n<2 is the base the resursive function has to reach to at the end of the recursion.
// Take n=8 as the example, the code will go like this
// n=8 return fib(8-1)+fib(8-2), then the answer is fib(7)=13 +fib(6) = 21;
// It stops here.








