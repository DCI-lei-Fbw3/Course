
/*
const FUNCTION_NAME = (PARAMETER, ...) => {
    FUNCTION_BODY
};

FUNCTION_NAME(PARAMETER, ...);
*/

const pow = (x, y) => {
    let result = x ** y;
    return result;
};

result = pow(3, 2);
console.log(result);

const square = (x) => {
    return x*x;
};

result = square(6);
console.log(result);

const greeting = () => {
    return "hello world";
};

console.log(greeting());

const showGreeting = () => {
    console.log("hello world");
};

showGreeting();
