/* 
# Math Library

Create a library offering mathematical functions.

The development shall be test driven.

That is implement a test before the actual functionality.

Let the tests run whenever needed.

## Functionality

-   difference(a: number, b: number): number

-   sum(a: number,b: number): number

-   product(a: number, b: number): number

-   quotient(a: number, b: number): number

-   remainder(a: number, b: number): number

-   abs(a: number): number # returns the distance from 0, that is the absolute value, a negative number must be changed 	to positive.

-   pow(base: number, exponent: number): number
	Raises the "base" to the power of "exponent" 

*/
	
const difference = (a, b) => a - b;
	
const sum = (a, b) => a + b;

const product = (a, b) => a * b;

const quotient = (a, b) => a / b;

const remainder = (a, b) => a % b;

const abs = n => Math.abs(n);

const pow = (base, exponent) => base ** exponent;

module.exports = {difference, sum, product, quotient, remainder, abs, pow};


