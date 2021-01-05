//console.log("This script can be run with arguments passed to the node repl");
const print = require("./stars");
const args = process.argv.slice(2);

print(args[0], args[1]);
