const printHeader = require("./02-stars");
console.log(process.argv);
const [num, text] = process.argv.slice(2);

printHeader(num, text);
