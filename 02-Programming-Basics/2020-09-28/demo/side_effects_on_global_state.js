
console.log("Why is that not cool?");

// => side effect of a function on global state,
// possibly introduced by accident.

let counter = 0;

function getOneMore() {
    return counter++
}

getOneMore();

console.log(counter);
