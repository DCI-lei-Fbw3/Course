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
    if (Array.isArray(objOrArray)) {
        let clone = [];
        
        for(let i=0; i<objOrArray.length; i++) {
            let v = objOrArray[i];
            if (typeof v == 'object' && v != null) {
                clone[i] = cloneDeep(objOrArray[i]);
            } else {
                clone[i] = v;
            }
        }

        return clone;
    }

    // argument is an object:
    if (typeof objOrArray == 'object' && objOrArray != null){
        let clone = {};
        
        for (k in objOrArray) {
            v = objOrArray[k];
            if (typeof v == 'object' && v != null) {
                clone[k] = cloneDeep(v);
            } else {
                clone[k] = v;
            }
        }   
        return clone;
    }
}

let clone = cloneDeep(original);

original.name = "R.";
original.family.mother = "E.";
original.family.grandparents.father = "Lionheart";

console.log("original =", original);
console.log("clone =", clone);
