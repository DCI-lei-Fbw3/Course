// see:
// https://eloquentjavascript.net/08_error.html

class ValidationError extends Error { }

function validate(value) {
    if (value.toLowerCase() == "left") return "L";
    if (value.toLowerCase() == "right") return "R";

    throw new ValidationError("Invalid direction: " + value);
}

try {
    let dir = validateDDD("left"); // ← typo!
    console.log("You chose ", dir);
} catch (e) {
    if (e instanceof ValidationError) {
        console.log(e);
    } else {
        throw e;
    }
}
