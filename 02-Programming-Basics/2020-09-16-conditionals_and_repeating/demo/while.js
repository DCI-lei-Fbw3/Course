/*

while (CONDITION) {
    CODEBLOCK

    break; // => quit/exit the while-loop

    continue; // => jump to next iteration

}

*/


// pure while with counter

let x = 1;

while (x < 11) {
    console.log(x);
    x++;
}

console.log("printing numbers from 1 to 100 excluding numbers divisible by 7");

x = 0

while ( x < 100 ) {
    x++;
    
    if (x % 7 == 0 ) {
        continue; // this stops the current iteration and goes to the next
    }

    console.log(x);
}

console.log("added test for 'not divisible by 7' in while():")
x = 1;
while ( x < 100 && (x % 7 != 0) ) {
//      7 < 100 && (7 % 7 != 0)
//      true    &&  (0 != 0)
//      true    &&  ( false )
//             false
    console.log(x);
    x++;
}


console.log("print only numbers divisible by 7:")
x = 0

while ( x < 100 ) {
    x++;
    
    // if (x % 7 == 0 ) {
    //     console.log(x);
    //     continue; // this stops the current iteration and goes to the next
    // }

    if (x % 7 == 0) {
        console.log(x);
    }
}

console.log("alternative: ")
x = 0

while ( x < 100 ) {
    x++;
    if (x % 7 != 0) {
        continue;
    }
    
    console.log(x);
}

console.log("break out of the loop if x equals 10:")

x = 0;
while (true) {
    x++;

    console.log(x);

    if (x == 10) break;
}

console.log("use 'do {} while ()' to log x from 1 to 10 if divisible by 2");
x = 0;
do {
    x++;
    if (x % 2 == 0) console.log(x)
} while (x < 2)

console.log("head directed loop:");
x = 1;
while (x < 2) {
    if (x % 2 == 0) console.log(x)
    x++;
}