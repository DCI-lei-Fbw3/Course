a = "Fran"
b = 25
//1
console.log( "Hello, my name is " + a + " and I am " + b )
// + concatenates the strings together

//2
a = "1005"
console.log(typeof a)

a = 1 * a      // conversion - kind of a trick, that forces Javascript to convert to number
a = Number(a)  // much cleaner conversion, that _explicitly_ states what should be done
console.log(typeof a)

a = Number("10.05")
console.log( typeof a )
