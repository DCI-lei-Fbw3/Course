// you could directly solve the last exercise, 
// but the stepwise approach shows how the problem can be approached.

//1.
console.log("1: print a random number");
let result1=Math.floor(Math.random()*101); //generate number from 0 to 100
console.log(result1);

console.log("\n");

//2
console.log("2: print 3 random numbers");
function result2 () {
    var randomNumber=Math.floor(Math.random()*101); //generate number from 0 to 100
    return randomNumber;
    }

for (let i=0; i<=2; i++) {
    i++;
    result2();
    console.log(result2());    
}

console.log("\n");

//3
console.log("3: print 3 random numbers between 0 and 5");
function result3 () {
    var randomNumber=Math.floor(Math.random()*6); //generate number from 0 to 5
    return randomNumber;
    }

let i=0;
while (i<=2) {
    i++;
    result3();
    console.log(result3());    
}

console.log("\n");

//4.
console.log("4: print 3 random numbers between 1 and 6");
function result4 () {
    var randomNumber=Math.floor(Math.random()*6)+1; //generate number from 1 to 6
    return randomNumber;
    }

let i=0;
 do {
    i++;
    result4();
    console.log(result4());    
} while (i<=2)

console.log("\n");

