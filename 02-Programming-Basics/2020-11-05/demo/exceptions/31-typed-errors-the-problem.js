// see:
// https://eloquentjavascript.net/08_error.html

class ValidationError extends Error { }

function validate(value) {
    if (value.toLowerCase() == "left") return "L";
    if (value.toLowerCase() == "right") return "R";

    throw new ValidationError("Invalid direction: " + value);
}

try {
    let dir = validateTYPO("invalid input"); // ← typo!
    console.log("You chose ", dir);
} catch (e) {
    if (e instanceof ValidationError) {
        console.log("Input not valid.");
    } else {
        throw e;
    }
}
