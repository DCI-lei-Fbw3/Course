/*

given a string "hello world"
iterate over its characters and print one character per output line.

so the output would look like:
------
h
e
l
l
o

w
o
r
l
d
------
*/

// scroll down for hints
let message = "hello world";

for (let i =0; i<message.length; i++) {
    console.log(message[i]);
}

for (let i of message) {
    console.log(i);
}






























































































// hints:
// a string has a length (message.length)
// characters of a string can be accessed by adding [CHAR_POSITION]






































// more hints:
// use a for loop
//   initialize an index with 0
//   test if index is smaller than message.length
//   increment index 
// in the loop:
//   log message[index]
