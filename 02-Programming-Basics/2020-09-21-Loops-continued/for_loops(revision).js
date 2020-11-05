// Welcome FbW3! Here we will loo at For loops (again)

//Brief recap: An ARRAY is just a list in the JS. array can hold all sorts of values

/* for (/* first item */ /* second item */, /* third item */)

// First Item

    // Array always star with the index value 0, and not 1.
    // index values are always always whole numbers

        for ( let index = 0 , /* second item */, /* third item */);

// Third Item
// Increasing the index variable

     for ( let index = 0 ; /* second item */;  index = index + 1);

// Second Item

// in the middle of FOR loop parenthesis, we have a condition
// the loop run will run over this condition untill this condition becomes FALSE

    for ( let index = 0 ; index < 5;  index = index + 1);

// The loop body

    for ( let index = 0 ;  index < 5;  index = index + 1){

        // loop body
    };

// An example

    for ( let index = 0 ; index < 5;  index = index + 1){
       console.log(index);
    };

//  Improving our syntax

for ( let i = 0 ; i < 5;  i++){
    console.log(index);
 };

 // Looping through an array

 let array = ['halle', 'leipzig', 'berlin'];

 for ( let i = 0 ; i < array.length;  i++){
    console.log(array[i]);
 };

 //OR write for loops ina  single line for not-so-complex loops

 for (let i = 0 ; i < array.length;  i++) console.log(array[i]);


 // Infinite loops

 // infinite loops can break your JS execution environment

 for (let i = 2 ; true ;  i++){
    console.log('We are stuck in a for-loop vortex...');
 };


 /* 
 list:
 
 (0) milk
 (1) eggs
 (2) flour
 (3) tomatoes
 /.....
 The number in parenthesis exemplifies the index
 */

 // Nested Loops

 // For loops can be nested within eachother, an inifinte number of times

 let array = ['halle', 'leipzig', 'berlin'];

 for ( let i = 0 ; i < array.length;  i++){
    console.log(array[i]);

    for (let i = 0 ; true ;  i++){
    console.log('We are stuck in a for-loop vortex...');
    };
 };

// 

 let array = ['1', '2', '3' ,'4', '5'];

 for ( let i = 0 ; i%2 ==0 ;  i++){
    console.log(array[i]+1);

    for (let j = 0 ; j%3 ==0 ;  j++){
    console.log(array[i] + 3);
    };
 };

 // How many golf balls can you fit in a school bus?

 /* 
 Bus estimates:

H = 2.3 m

Width = 2.5 m

Length = 11 m

Volume of bus = 2.3 x 2.5 x 11 = 63.25 cubic meters


1 golf ball = 0.4267 m

# in 1 meter = 1/ 0.4267 = 23.43

In 1 cubic meter lattice = 23.43 x 23.43 x 23.43 = 12865

Total golf balls bus = 813,734
  */