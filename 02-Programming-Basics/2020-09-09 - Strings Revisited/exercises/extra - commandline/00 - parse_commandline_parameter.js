// source: https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/

console.log(process.argv);

let args = process.argv.slice(2);

console.log(args[0]);

