
// we have a math.js mudle,let's import it here
 
import {sumAll} from './math.js';
import {max} from './max.js';
// you import multiple modules at ony, seperated by commas
// import {sumAll, subtractAll, multiplyAll} from './math.js';


console.log(sumAll(10,5)); //should be 15
console.log(max(10,5)) 

    //Importing with Alliases

/* import * as math from './math.js';
//"* as math" is importing all exported values from math.js and assigning them to a "math" object
// you import multiple modules at ony, seperated by commas


console.log(math.sumAll(10,5)); //should be 15
console.log(math.subtractAll(10,5)); //should be 15
console.log(math.multiplyAll(10,5)); //should be 15 */

    //Importing default values

/* import math from './math.js'; //if you don't export as default, this method will give a syntax error

console.log(math.sumAll(20,3)); //should be 15
console.log(math.subtractAll(20,3)); //should be 15
console.log(math.multiplyAll(20,3)); //should be 15

import anotherThing from 'https://example.url' //you will see very fast this will in most cases give an error (CORS) */