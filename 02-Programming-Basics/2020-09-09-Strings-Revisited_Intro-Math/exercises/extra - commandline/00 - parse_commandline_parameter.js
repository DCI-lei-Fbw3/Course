// source:  

//console.log(process.argv);

let commandline_args = process.argv;

// console.log(typeof process.argv)
console.log(commandline_args);

let args = process.argv.slice(2);

<<<<<<< HEAD
console.log(args[0]);

=======
console.log("args:", args)

console.log("args[0]:", args[0]);
console.log("args[1]:", args[1]);
console.log("args[2]:", args[2]);
>>>>>>> 9f26c9b0e77a8bf1541550dc9b6d51918dc174e5
