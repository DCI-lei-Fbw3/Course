//line-wise loop
let string1="Hello World";
for (let i=0; i<string1.length; i++){
    console.log(string1[i]);
}
console.log("\n");

let index=0;

let string2="Winnie the Pooh";
for (index in string2) {
    console.log(string2[index]);

}


// you could directly solve the last exercise, 
// but the stepwise approach shows how the problem can be approached.

console.log("print a random number");
let result1=Math.floor(Math.random()*101); //generate number from 0 to 100
console.log(result1);

console.log("\n");

console.log("print 3 random numbers");
function result2 () {
    var randomNumber=Math.floor(Math.random()*101); //generate number from 0 to 100
    return randomNumber;
    }

for (let i=0; i<3; i++) {
    result2();
    console.log(result2());    
}

console.log("\n");

console.log("print 3 random numbers between 0 and 5");
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

console.log("print 3 random numbers between 1 and 6");
function result4 () {
    var randomNumber=Math.floor(Math.random()*6)+1; //generate number from 1 to 6
    return randomNumber;
    }

var index2=0;
 do {
    index2++;
    result4();
    console.log(result4());    
} while (index2<=2)

console.log("\n");