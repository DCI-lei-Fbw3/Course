/*

for (DECLARATION and INITIALIZATION; CONDITION/TEST; CODE/INCREMENTOR) {
    CODEBLOCK
}

*/

console.log("count from 1 to 10");

for (let x=1; x<11; x++) {
    console.log(x);
}

console.log("print only even even numbers:");

for (let x=1; x<11; x++) {
    if (x%2 == 0 ) console.log(x);
}

// optional "arguments"

// for (;;) { // equivalent to while (true) {
//     console.log("TEST");
// }

console.log("moved incrementor into CODEBLOCK")
for (let x=1; x<11; ) {
    console.log(x);
    x++;
}


console.log("using break to exit the loop:");
for (let x=1; ; x++) {
    if (! (x < 11)) break;
    console.log(x);
}

console.log("using continue to skip not even numbers:");
for (let x=1; x<11; x++) {
    if ( x%2 != 0) continue;

    console.log(x);
}

