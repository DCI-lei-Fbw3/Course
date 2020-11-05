// see:
// https://eloquentjavascript.net/08_error.html

function lastElement(array) {
    if (array.length == 0) {
      throw new Error("empty array");
    }

    return {element: array[array.length - 1]};
}

lastElement([]);
