const original = {
    name: 'Robert',
    location: 'USA',
    family: {
        father: 'Rob',
        mother: 'Eve'
    }
};

const clone = Object.assign({}, original);
//const clone = original; // here a reference is copied

//original.name = "R.";
//original.family.mother = "E.";

console.log("original =", original);
console.log("clone =", clone);
