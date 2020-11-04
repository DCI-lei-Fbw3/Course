// # Debugging Exercises

// #### 3. Reverse
// Create a function that reverses a string. Throw a custom error if the user inputs another type as an argument.

// * Example
// * reverseString(2019) -> `ERROR! This is not a string!`

//Method 1:
function reverse(str) {
    if (typeof(str) !== "string"){
        return `ERROR! This is not a string!`
    } else {
    let splitStr = str.split("");
    let reverseStr = splitStr.reverse();
    let joinStr = reverseStr.join("");

   return joinStr;
    }
}
console.log(reverse(2019));
console.log(reverse("2019"));

//Method 2:
function reverse(str) {
    if (typeof(str) !== "string"){
        return `ERROR! This is not a string!`
    } else {
    let newStr = "";
    for (let i=str.length-1; i>=0; i--) {
        newStr +=str[i];
    }  return newStr;  
}
}

console.log(reverse("bear"));
console.log(reverse(700));
