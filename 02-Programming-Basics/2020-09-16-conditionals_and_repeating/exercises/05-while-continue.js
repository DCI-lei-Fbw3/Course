console.log("loop over i as long as it is less than 10.")
console.log("in the loop:");
console.log("- make the loop jump to the next iteration when i is 5.");
console.log("- log i to the console");
console.log("- increment i by 1");

let i=0;
while(i<10){
    console.log(`in the loop. ${i}`);
    i++;
    if (i==5) {
        continue;
    }    
}
