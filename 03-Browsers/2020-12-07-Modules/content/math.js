/* 
You can export individual pieces of your code

export let sumAll = (a, b) => {return a+b;}

export let subtractAll = (a,b) => {return a-b;}

export let divideAll = (a,b) => {return a / b;}

export let multiplyAll = (a,b) => {return a * b;}

export let findModulus = (a,b) => {return a % b;} */

// But  its better to use a single export statement 

 let sumAll = (a, b) => {return a+b;}

 let subtractAll = (a,b) => {return a-b;}

 let divideAll = (a,b) => {return a / b;}

 let multiplyAll = (a,b) => {return a * b;}

 let findModulus = (a,b) => {return a % b;}

 export {sumAll, subtractAll, divideAll, multiplyAll, findModulus};

 // You can also export default values 

 // export default {sumAll, subtractAll, divideAll, multiplyAll, findModulus};

 /* Notes:
 - You should only export modules you want to use in other parts of your
 code, its not mandatory for you to export every module in the script.
 

 */