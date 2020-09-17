
let students = ["Alice", "Bob", "Eve", "Tom", "Nici"];

let pairs = [];

for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students.length; j++) {
        if (i < j) pairs.push(students[i] + ", " + students[j]);
    }
}

for (let i = 0; i < pairs.length; i++) {
    console.log(pairs[i]);
}
