//welcome back FbW3! Let's have a look at Recursion 

/* Agenda
1. Define recursion in JS
2. Call stack, relation to recursion
3. Iterative vs. recursive solutions
4. Pros and Cons 
*/


// 1 + 2 
        /*  
        - Recursion is a programming technique that solves complex problems by
        elegantly simplifying a repititive execution in a set of smaller 
        executions of a similar nature.

        - Wound and unwound functions. 
        Wound function --> functions that return the last value they are supposed to
        (e.g. looping over a list and returning the last value)
        Wound functions in the call stack are executed backwards (thinkin of a key 
        being wound clockwise, but when you let go, the key unwounds anticlockwise)


        Unwound --> functions that have not returned the last value yet (could be in process)
        (e.g. an ongoing loop) --> the actual execution order in the unwinding

        - Another definition: By leveraging the call stack in JS, recursion winds up nested functions and 
        then unwinds them.

        - Recursion is a programming idea or method, not actual code.

        - Recursive solutions would help you better the readability and debugging of your code.

        - Recursive functions are functions that return themselves

        */

        // For example:

        function recursion(){
            return recursion() 

        }
        recursion();

        /* 
        Notes:

        1) notice that we are executing our recursion function twice,
        once within the scope of our function, and again outside in the global scope.
        2) We execute the recursion function in the global scope first (ln 38), which then
        calls the recursion function from within our recursion function
        3) This, in turn, runs the function again, which again calls recursion, adding recursion 
        continously to our call stack, therefore creating a loop. 
        4) This function called "recursion" demonstrates a "recursive pattern".

        */


        /* 
        Base Case:

        - By provding a base case to our recursive functions, we can regulate the call stack
        of our nested functions. The base case is our condition which we can write that 
        sitched our stack being being recursively wound to unwound.

        */

        function recursivePattern1(num){
        //base case
        if (num <= 0){
            return 0
            } else {
        // recursion execution
        console.log(num);
        return recursivePattern(num - 1) //here is the decrement
                }
        }
        recursivePattern(4); //you start the program here

        /* 
        Notes:
        1. In comparison to ur previous example, this example will not exceed and break
        the call stack since we have defined a base case: [ if (num <=0)  ].
        2. Once the argument "num" is less than or equal to zero, our function "recursivePattern"
        return zero.

        */


// 3 (Iterative v. Recursive)

/* 
Why use recursion when you have loops in JS?
*/


//Iterative pattern
function iterativePattern(startVal, endVal){
const arr = [];
for (let i = startVal; i <= endVal; i++){
arr.push(i)
    }
return arr
}

console.log("interative solution array: ", iterativePattern(1, 10))
// should print an array of numbers from 1 to 10

//Recursive Pattern
function recursivePattern2(startVal, endVal){
    //base case
    if (startVal >= endVal) {
        
        return [startVal]
        }       else {// this is where the program starts after execution
            // recursive function
    const arr = recursivePattern2(startVal, endVal - 1); 
    arr.push(endVal); //js realises to convert arr into an array and pushed 10 to the end of the array
    return arr;
    }
}
console.log("recursive solution array: ", recursivePattern2(1,10))

// Ilya's solution

function recursivePattern(1, 4){
    //base case
    if (1 >= 4) {
        return [1]
        }       else {
            // recursive function
    const arr = recursivePattern(1, 4 - 1);
        function recursivePattern(1, 4 - 1){
            //base case
            if (1 >= 3) {
                return [1]
                }       else {
                    // recursive function
            const arr = recursivePattern(1, 3 - 1);
                function recursivePattern(1, 3 - 1){
                    //base case
                    if (1 >= 2) {
                        return [1]
                        }       else {
                            // recursive function
                    const arr = recursivePattern(1, 2 - 1);
                        function recursivePattern(1, 2 - 1){
                            //base case
                            if (1 >= 1) {
                                return [1]
                        }  
                    [1].push(2);
                    return [1,2];
                    }
                }
            [1,2].push(3);
            return [1,2,3];
            }
        }
    [1,2,3].push(4);
    return [1,2,3,4];
    }
}
console.log("recursive solution array: ", recursivePattern(1,4))