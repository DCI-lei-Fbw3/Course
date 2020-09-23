
let variable = "test";

function output() {
    variable += " - ADDED THIS INSIDE OF A FUNCTION BY DIRECTLY USING THE GLOBAL VARIABLE";

    console.log(variable);
}

output();

console.log(variable);
