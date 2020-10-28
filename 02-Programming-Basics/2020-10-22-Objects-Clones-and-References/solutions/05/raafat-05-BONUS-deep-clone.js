const person = {
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

const deepCopyFunction = (inObject) => {
    let outObject, value, key;
    if (typeof inObject !== "object" || inObject === null) {
        return inObject;
    }
    outObject = Array.isArray(inObject) ? [] : {};
    for (key in inObject) {
        value = inObject[key];
        outObject[key] = deepCopyFunction(value);
    }
    return outObject;
};

let clone = deepCopyFunction(person);

console.log(clone);
