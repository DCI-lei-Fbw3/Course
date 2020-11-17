var rand = Math.random();

function hello(x) {
    console.log(x);
};

function two(oops) {
    oops(rand);
};

two(hello);

console.log("\n");

function three(x) { console.log (x);}
function gosh(randVar, callback) {
    callback(randVar);
}

gosh(Math.random(), three);

console.log("\n");

function d() {
    function e() {
        console.log("E");
    }
    return e;
}

d()();

console.log("\n");

var add = (x,y) => x+y; // FCF
var subtract = (x,y) => y-x; // FCF
var multiply = (x, y) => x * y; // FCF

function numbers (fn, x, y) { // this is the HOF

    return fn(x,y);
}

var addResult = numbers(add, 3, 2);
console.log(addResult);
var subtractResult = numbers(subtract, 2, 3);
console.log(subtractResult);
var multiplyResult = numbers (multiply, 2, 3);
console.log(multiplyResult);

console.log("\n");

function functionOne (x) { console.log(x);};

function functionTwo (var1, callback) {
    callback(var1);
}
functionTwo("Hey this callback stuff is strange!",functionOne);

console.log("\n");

function functionThree (var1, callback) {
    callback(var1);
}
functionThree("Hey this callback stuff is strangely funny. Haha!", function (x) { console.log(x);})

console.log("\n");

function functionFour (var1, callback1, var2, callback2) {
    callback1(var1);
    callback2(var2);
}
functionFour("This is callback 1", function (x) {console.log(x);},"This is callback 2!", function (x) {console.log(x);})

function functionFive (var1, var2, callback) {
    let x = var1;
    let y = var2;
   
    let add = x+y; 
    return callback(add);
}

functionFive(2,2, print);

function print(x){
    console.log(x);
}

function functionFive(var1, var2, callback) {
	let x = var1;
	let y = var2;
	const innerFunc = () => {
		let add = x + y;
		return callback(add);
	};
	return innerFunc();
}
functionFive(2, 2, print);

function print(x) {
	console.log(x);
}

function functionSix(x, y, callback) {
	const innerFunc = (x, y) => {
        let add = x+y;
        return callback(add);
	};
	return innerFunc(x, y);
}
functionSix(12, 12, print);

function print(z) {
	console.log(z);
}

function functionSeven(x, y, theHeck) {
	//let x = var1;
	//let y = var2;
	const callback = (x, y) => {
        let add = x+y;
        return add;
	};
	return theHeck(add);
}
functionSeven(4, 6, print);

function print(z) {
	console.log(z);
}

