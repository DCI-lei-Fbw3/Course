// Intro to Array Methods 

/* 
Why do we want to have methods?

We use methods because we want to make more use of the information stored inside arrays

Javascript has multiple functions available for use built-in to the language. 
There are several that help us work with arrays

*/

//Array.push

    /* 
    We can add items to the end of an array using Array.push.

    Sidenote: Whenever I captilize Array, this means that this function
    is available to use on every array.
    */

    let arr = ['abc', 'def'];
    console.log(arr); // --> ['abc', 'def']
    arr.push('ghi');
    console.log(arr);// --> ['abc', 'def', 'ghi']

    /* 
    The argument we put into the push function will be added at the 
    end of the array

    You can push/add multiple items at once to your array. Just pass
    multiple arguments tot he push() function with all the new items
    */

    arr.push('jkl', 'mno');
    console.log(arr); 

//Array.pop

/* 
the pop() method removes the last item from an array and returns it. 
*****pop method takes no argument 
*/

let lastItem = arr.pop(); //--> not only stores the last index value from arr, but also removes it

console.log(lastItem); // --> will print 'mno'
console.log(arr); // --> prints the whole array again without the 'mno'

//Array.shift

/* 
Shift is like pop, except it removes and returns from the beginning of the
array.
*/

let firstItem = arr.shift(); //--> not only stores the first index value from arr, but also removes it

console.log(firstItem); // --> will print 'abc'
console.log(arr); //--> prints the whole array again without the 'abc'

//Array.unshift

/* 
Unshift does the exact same thing as psuh, except it adds the values (arguments), to the ebggining of
an array.
*/

arr.unshift('abc');
console.log(arr);


//Array.reverse

/* 
The reverse method,reverses the array. For example, it will trun [1,2,3] to [3,2,1]
Reverse method also does take any arguments
*/
arr.reverse();
console.log(arr); //--> it should be reversed