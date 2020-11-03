function nestArrays(currDepth, maxDepth) {
    let arr = [];

    arr.push(currDepth);

    currDepth++;
    if (currDepth <= maxDepth) {
        arr.push(nestArrays(currDepth, maxDepth));
    }

    return arr;
}

console.log(nestArrays(0, 2));

console.log("*** nestArraysBonus ***");
function nestArraysBonus(currDepth, maxDepth, breadth) {
    let arr = [];

    arr.push(currDepth);

    let nextDepth = currDepth + 1;
    for (let i = 0; i < breadth; i++) {
        arr.push(currDepth < maxDepth ? nestArrays(nextDepth, maxDepth, breadth) : null);
    }

    return arr;
}

console.log(nestArraysBonus(0, 5, 2));
