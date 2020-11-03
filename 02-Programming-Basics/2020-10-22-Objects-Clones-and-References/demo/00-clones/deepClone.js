const original = {
    name: 'Robert',
    location: 'USA',
    test: null,
    test_arr: [1, 2, 3], 
    family: {
        father: 'Rob',
        mother: 'Eve',
        grandparents: {
            father: "Richard",
            mother: "Elizabeth",
        },
    },
};


function cloneDeep(objOrArray) {
    // the early bailout is courtesy of Raafat
    if (typeof objOrArray !== 'object' // => it is a simple datatype
        || objOrArray == null // typeof null => 'object'
    ) {
        return objOrArray; // because it is a simple type
    }

    // after the if => it is an object AND it is not null

    let clone = Array.isArray(objOrArray)? [] : {};
        
    for (k in objOrArray) {
        let v = objOrArray[k];
        if (typeof v == 'object') {
            clone[k] = cloneDeep(v);
        } else {
            clone[k] = v;
        }
    }

    return clone;
}

let clone = cloneDeep(original);

original.name = "R.";
original.test_arr = ['a', 'b'];
original.family.mother = "E.";
original.family.grandparents.father = "Lionheart";

console.log("original =", original);
console.log("clone =", clone);
