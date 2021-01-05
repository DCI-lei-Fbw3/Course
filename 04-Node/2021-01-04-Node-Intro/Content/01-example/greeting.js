//How to capute input on the Node CLI

//Import the core mdoule called readline

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("What's your name?", (name) => {
    console.log(`Hi ${name}`)
    readline.close()
})

/* 
function greeting (a, b){
    return console.log(a + "" + b)
} */

console.log("Total Arguments: ", process.argv.length);

let args = process.argv;

console.log(args); 