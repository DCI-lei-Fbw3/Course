
// original source:
// https://codedestine.com/javascript-deep-shallow-cloning/#:~:text=JavaScript%20Deep%20and%20Shallow%20Clone%20of%20Object.%20In,types%2C%20a%20primitive%20type%2C%20and%20an%20object%20type.

/*
  lodash has been downloaded to this directory via:
  $> wget https://raw.githubusercontent.com/lodash/lodash/4.17.15-npm/lodash.js

  Note: lodash "Core" does not include cloneDeep(), so the "Full build" is required.
*/

const lodash = require('./lodash');

const original = {
    name: 'Robert',
    location: 'USA',
    family: {
        father: 'Rob',
        mother: 'Eve'
    }
};

const clone = lodash.cloneDeep(original);

console.log("original and clone after assign:");
console.log("original =",original);
console.log("clone =", clone);

original.name = 'John';
original.family.father = 'Josh';

console.log("\noriginal and clone after changes to original:");
console.log("original =",original);
console.log("clone =", clone);
