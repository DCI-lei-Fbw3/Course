let original = {
    name: 'Robert',
    location: 'USA',
    family: {
        father: 'Rob',
        mother: 'Eve'
    }
};

let clone = Object.create(original); 
// this creates an Object which 
// refers to the original as its prototype

clone.name = "Robert jr.";

for (k in clone) {
	console.log(k, "=",clone[k]);
}

//original.name = "R.";
//original.family.mother = "E.";

console.log("original =", original);
console.log("clone =", clone);
