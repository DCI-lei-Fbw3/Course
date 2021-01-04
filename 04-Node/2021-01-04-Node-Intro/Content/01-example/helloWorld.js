// So you can require or imort/export modules....use import/export 
var Square = require ('./square');
/* import Square from './square'; ---> same thing with import statement */


// Since the module exports a constructir function,
// we have to create an instance before using it.

var Square = new Square(5);

console.log(Square.area());

let hello = `Welcome to NodeJS!`;
console.log(hello);

console.log("Total Arguments: ", process.argv.length);
console.log(process.argv);
