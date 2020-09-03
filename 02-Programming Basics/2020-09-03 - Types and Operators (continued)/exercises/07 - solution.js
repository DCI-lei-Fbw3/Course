// true OR false

console.log( 3 == "3" )   // equality
// 
console.log( 3 === "3" )  // strict equality
// no type conversion allowed

word = 3
console.log( word == "word")

console.log( "test" == true )
console.log( true == "test" )

console.log(a="test")
console.log(a)

a = "no"
a == "test"
a = "test"

//2
a = true
console.log( a   ?  true        : false)
//           TEST?  TRUE_OPTION : FALSE_OPTION )
console.log( !a? "true option" : "false option")

//3
let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 
//  name = false     || 'Stacey'  || 'John';
//  name = 'Stacey'  || 'John';
//  stops evaluation after 'Stacey' so the value will be 'Stacey'
console.log(name);
