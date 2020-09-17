console.log("loop over i as long as it is less than 100.")
console.log("in the loop:");
console.log("- leave the loop if 'i' is divisible by 42.");
console.log("- log i to the console");
console.log("- increment i by 1");

let i=0;
while (i<100) {
    console.log("in the loop.");
    i++;
    if (i%42==0) {
        break;
    }
}
console.log(i);
i=i+1;
console.log(`Now i has become ${i}.`);