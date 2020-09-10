// source: https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/

//console.log(process.argv);

let commandline_args = process.argv;

// console.log(typeof process.argv)
console.log(commandline_args);

let args = process.argv.slice(2);

console.log("args:", args)

console.log("args[0]:", args[0]);
console.log("args[1]:", args[1]);
console.log("args[2]:", args[2]);
