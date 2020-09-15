// FbW3: First look into While loops

var x = 0;
while (x < 5) {
  console.log('comes from console.log: ' + x);
  x = x + 1;
}



/* 
While  are another tool in our toolbelt. 
They're used less frequetly than for-loops.
*/

/* 
While loops only take one piece of information, the condition
at a time. 
 Negativeaspect of while loops is also that they only take one piece of 
 iformation at a time. You have manually make it do multiple things
 at once.
*/

let i = 0; // Usuall, i, denotes the counter/increment
// counter = the number of operation that need to happen
while (i < 10){
console.log(i)    //this is an infinite loop, because I don't increment the variable
}

/* 
While-Loop Disadvantages
It is very easy to fall into infinite loops using while-loops
Since you don't always have to have a counter, it's easy to forget to incerement a variable
that we're using in our condition.
*/

let i = 0; // Usuall, i, denotes the counter/increment
// counter = the number of operation that need to happen
while (i ++ ){
console.log(i)    
}

/* 
While-Loop Advantages
Sometimes we abslutely have to repeat things an unknown number of times. 
This is when whil-loops shine! We only give them a conidition and 
when the condition is no longer met, the loop stops. In this way, they
are more flexible than for-loops.
*/
