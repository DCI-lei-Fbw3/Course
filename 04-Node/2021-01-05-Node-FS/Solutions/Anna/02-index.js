const printHeader = require("./02-stars");

const [num, text] = process.argv.slice(2);

printHeader(num, text);
