const original = {
    name: 'Robert',
    location: 'USA',
    family: {
        father: 'Rob',
        mother: 'Eve'
    }
};

function compare(a, b) {
    for (let k in a) {
        if (a[k] != b[k]) return false;
    }

    //if (!compare(b, a)) return false;
    for (let k in b) {
        if (b[k] != a[k]) return false;
    }

    return true;
}

const clone = {...original};
//const clone = Object.assign({}, original);

//original.name = "R.";
//original.family.mother = "E.";

console.log("original =", original);
console.log("clone =", clone);

console.log("*** comparing with '==' (equality)?")
console.log(original == clone? "equal":"not equal");
console.log("*** comparing with '===' (identity)?")
console.log(original === clone? "equal":"not equal");


console.log("*** using custom compare function:");
console.log(compare(original, clone)? "equal": "not equal");

console.log("\n*** applying changes to the original:")
original.name = "R.";
original.family.mother = "E.";

console.log("original =", original);
console.log("clone =", clone);

console.log(compare(original, clone)? "equal": "not equal");
