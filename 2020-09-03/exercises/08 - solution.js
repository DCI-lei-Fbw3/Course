//1
// NaN => Not a Number

console.log(typeof "hello")
console.log(typeof NaN)

console.log("hello" == NaN)

console.log("comparing values:")
console.log( 3 == NaN )

console.log("comparing types: ")
console.log( typeof 3 == typeof NaN )
console.log( typeof 3 == typeof 5 )

//2
a = 0.1 * 0.2
console.log(`${a}`[0] + `${a}`[1] + `${a}`[2] + `${a}`[3])
console.log( a.toFixed(2) )

//3
console.log( Infinity / 0 )
console.log( Infinity / Infinity )
console.log( 1 / 0 )
