// source:
// https://eloquentjavascript.net/08_error.html

// return the given "n" transformed from being a decimal number to a number of the given "base"
function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        //console.log(n, ":", n % base); // console.log/print debugging
        // try instead of print-debugging the debugger with a breakpoint
        n = n / base;
        //n = Math.floor(n / base); // fix
    } while (n > 0);

    return sign + result;
}

/*
8421
0001
     8421
6 => 0110
*/

console.log(numberToString(6, 2));
// → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e-3181.3…

/*

See:
    https://nodejs.org/en/docs/guides/debugging-getting-started/
for details on using the node debugger.

Debug e. g. with VS-Code or Chrome

*/
