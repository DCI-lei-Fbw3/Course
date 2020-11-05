// see:
// https://eloquentjavascript.net/08_error.html

class InputError extends Error { }

function validate(value) {
    if (value.toLowerCase() == "left") return "L";
    if (value.toLowerCase() == "right") return "R";

    throw new InputError("Invalid parameter 'direction': " + value);
}

try {
  let dir = validateTYPO("left"); // ← typo!
  console.log("You chose ", dir);
} catch (e) {
  console.log("Not a valid direction. Try again.");
}
