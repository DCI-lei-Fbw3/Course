const original = {
    name: 'Robert',
    location: 'USA',
    family: {
        father: 'Rob',
        mother: 'Eve'
    }
};

const clone = { ...original };

original.name = "R."; 
original.family.mother = "E.";

console.log("original = ", original);
console.log("clone = ", clone);
