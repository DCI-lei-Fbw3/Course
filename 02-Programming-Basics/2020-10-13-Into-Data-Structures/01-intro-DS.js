//Welcome FbW3 -- Let's look at the array data structure

    //Arrays

/* 
Arrays are a complex data structure in Javascript. 
Arrays are collections of ther variables.

Arrays are used to store items, and work with those stored items collectively.

All items in an array are ordered and indexed, with first item being at index 0.

*/


    //Creating an Array

        /* Arrays can be thought of as containers. they contain multiple other variables 
        inside them in an ordered way */

        let array = [0, 1, 2, 3, 4, 5];
        console.log(array);

        // the array doesn't need to hold value of only a single data type

        array = [0, "abc", false, 3, "def", 5];
    //indexes =  0    1      2    3   4     5

        console.log(array);

        //we can say that arrays are a collection of items that contains values

    // Accessing Items

        console.log(array[4]); // --> prints "def"
        console.log(array[3]); // --> prints 3
        console.log(array[5]); // --> prints 5

        /* 
        Access items in an array by reffering to the index in sqaure brackets
        */

    // Length

    /* 
    For string, we can sue the .length method to calculate the legth of a string
    */

    console.log(array.length); //--> 6

    // Changing Items

    /* 
    - Because array items are variables, you can reassign them
    - You don't have to worry about data types when reassigning new values to an array
    */

    array[0] = 1231029321;
    console.log(array[0]);

    array[4] = 6;
    console.log(array[4]);

    // Adding values

    array[6] = "this is a new value";
    console.log(array);