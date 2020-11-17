console.log("The following program should output the number 'i', increment it by 'increment', and terminate if 20 is reached.");
console.log();
console.log("Hint: CTRL-C can be used to terminate running programs.");
console.log();
console.log("Does the program work as expected?");
console.log("What problems may arise when working with such code?");
console.log("What happens if 'i' is set to 1?");
console.log("What happens if 'increment' is set to 3?");
console.log("How can the code be improved (be made more robust)?");

let i = 0;
//let increment = 2;
console.log(i);
while (true) {
    //i += increment;
    i+=2;
    console.log(i);
    //if (i == 20) break;
}

//improved version
let i = 0;

console.log(i);
while (i<20) {  
    i+=2;
    console.log(i);    
}

//increment at 1
let i = 1;

console.log(i);
while (i<20) {  
    i++;
    console.log(i);    
}

//increment at 3
let i = 0;

console.log(i);
while (i<20) {  
    i+=3;
    
    if (i>=20) {
        break;
    }   
    console.log(i); 
    
}
