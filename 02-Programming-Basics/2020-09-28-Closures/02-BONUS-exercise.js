// function lambdaDepth(n){
//     if (n === 0 ) {
//         return "DCI"
//     } else if ( n > 0 ) {
//         return function () {
            
//         }
//     }
// }

// var add = (x,y) => x+y; // FCF
// var subtract = (x,y) => y-x; // FCF
// var multiply = (x, y) => x * y; // FCF

// function numbers (fn, x, y) { // this is the HOF

//     return fn(x,y);
// }

// var addResult = numbers(add, 3, 2);
// console.log(addResult);
// var subtractResult = numbers(subtract, 2, 3);
// console.log(subtractResult);
// var multiplyResult = numbers (multiply, 2, 3);
// console.log(multiplyResult);

function functionOne (x) { alert (x);};

function functionTwo (var1, callback) {
    callback(var1);
}
functionTwo("Hey this callback stuff is strange!",functionOne); 

function functionThree (var1, callback) {
    callback(var1);
}
functionThree("Hey this callback stuff is strange!", function (x) { alert (x);})
