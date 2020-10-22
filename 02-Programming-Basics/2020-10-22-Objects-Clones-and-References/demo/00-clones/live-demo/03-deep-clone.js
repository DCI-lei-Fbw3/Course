const lodash = require('./lodash');

const original = {
    name: 'Robert',
    location: null, //'USA',
    family: {
        father: 'Rob',
        mother: 'Eve'
    }
};

const clone = lodash.cloneDeep(original);

original.name = "R.";
original.family.mother = "E.";

console.log("original =", original);
console.log("clone =", clone);

console.log("location:", typeof original.location);
console.log("family:", typeof original.family);
