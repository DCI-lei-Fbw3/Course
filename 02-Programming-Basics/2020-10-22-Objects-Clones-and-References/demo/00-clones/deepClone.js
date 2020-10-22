const original = {
    name: 'Robert',
    location: 'USA',
    test: null,
    family: {
        father: 'Rob',
        mother: 'Eve',
        grandparents: {
            father: "Richard",
            mother: "Elizabeth",
        },
    },
};


function cloneDeep(obj) {
    let clone = {};

    for (k in obj) {
        v = obj[k];
        if (typeof v == 'object' && v != null) {
            clone[k] = cloneDeep(v);
        } else {
            clone[k] = v;
        }
    }

    return clone;
}

let clone = cloneDeep(original);

original.name = "R.";
original.family.mother = "E.";
original.family.grandparents.father = "Lionheart";

console.log("original =", original);
console.log("clone =", clone);
