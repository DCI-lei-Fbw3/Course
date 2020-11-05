// # Deep comparison

// The `==` operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

// To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces `object` for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces `object`.

// The Object.keys function will be useful when you need to go over the properties of objects to compare them.
//  in case we have objects
// object.keys & object.values  --> compare them 
//typeof(Object1) == typeof(Object2) && (Object.entries(object1)) == Object.entries(object2)   
// Object.entries(objec1) == Object.entries(object2)
// keys: values of object 1 == keys:values of object 2
//return true
// // Your code here.
let obj = {here: {is: "an"}, object: 2};
/* function deepEqual(x,y){
    // function should be called multiple times from within itself
    // deepEqual must compare the first (keys:values) of obj 1 with first (keys:values) of obj2;
    if (x.keys() == y.keys()){
        return true
    } 

       
       return deepEqual(); 
}
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual(obj, {here: 1, object: 2})); */
// → true

// → false
// → true
/* console.log(typeof(obj));
console.log(Object.values(obj) == Object.values({here: {is: "an"}, object: 2}));
console.log(Object.keys(obj) == Object.keys({here: {is: "an"}, object: 2}));  */
// JSON.stringify(k1) === JSON.stringify(k2); ----> this method 





/* let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true */

const isEqual = (a, b) => {
    if (a === b) return true;
    if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
    if (a === null || a === undefined || b === null || b === undefined) return false;
    if (a.prototype !== b.prototype) return false;
    let keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;
    return keys.every(k => isEqual(a[k], b[k]));
  };

  console.log(isEqual(obj, {here: {is: "an"}, object: 2}));