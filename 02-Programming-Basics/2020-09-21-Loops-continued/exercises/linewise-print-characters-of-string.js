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

let string1="Hello World";
for (let i=0; i<string1.length; i++){
    console.log(string1[i]);
}
console.log("\n");

let index=0;
//line="";
let string2="Winnie the Pooh";
for (index in string2) {
    //string2[index];   
    //line=line+string2[index];
     //index;
    //line=line+index;
    console.log(string2[index]);

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
