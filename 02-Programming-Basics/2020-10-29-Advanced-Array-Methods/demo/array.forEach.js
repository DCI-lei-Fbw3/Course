// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

/*

// the callback takes up to 3 arguments:
1.) currentValue (mandatory)
2.) index (optional)
3.) array (optional)

function callback(currentValue[, index[, array]]) {
	// body
}

arr.forEach(callback);

*/

let arr = [10, 20, 30];

console.log("\ncallback with 1 argument (currentValue):")
arr.forEach(element => console.log(element));

console.log("\ncallback with 2 arguments (currentValue, index):")
arr.forEach((element, index) => console.log(index, "=>", element));

console.log("\ncallback with 3 arguments (currentValue, index, array):")
arr.forEach((element, index, array) => console.log("["+array+"]["+index+"]", "=>", element));
