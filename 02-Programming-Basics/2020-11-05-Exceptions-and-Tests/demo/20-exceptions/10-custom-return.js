// see:
// https://eloquentjavascript.net/08_error.html

function lastElement(array) {
    if (array.length == 0) {
      return {failed: true};
    } else {
      return {element: array[array.length - 1]};
    }
}

let result = lastElement([]);
let element = !result.failed? result.element : console.log("error occured");
