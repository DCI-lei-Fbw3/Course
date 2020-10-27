let object = {
    arr: [10, 20, 30],
    objA: {
        a: 1,
        b: 2,
        objB: {
            a: 3,
            b: 4,
        },
    },
}

console.log("the whole object:");
console.log(object);

console.log("\na leaf attribute:");
console.log(object.objA.objB.a);
