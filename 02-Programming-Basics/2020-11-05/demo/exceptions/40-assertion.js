// source:
// https://eloquentjavascript.net/08_error.html

// Assertions secure against programming errors.
// Loud and direct response to a misuse.

function firstElement(array) {
    if (array.length == 0) {
        throw new Error("firstElement called with []");
    }

    return array[0];
}


let array = [];
console.log(firstElement(array));
