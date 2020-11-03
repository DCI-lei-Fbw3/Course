// # Logical Thinking III
// Write pseudo-code for the following exercises on pen and paper.

// #### 1. Lowest to Highest
// Given an array of numbers from 1-9:

// ```javascript
testNumber = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
// ```
// Sort the array from lowest value to highest.

const sortingNumber = (arr) => {
    for (let i=0; i<arr.length; i++) {
        for (let j=0;j<arr.length; j++) {
            if (arr[j]<arr[j+1]) {//here I am sorting the array out in descending order, for a change
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(sortingNumber(testNumber));


// #### 2. Alphabetical Order
// Given an array of names:
// ```javascript
let testNames = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi", "Heidi", "Winnie", "Piglet", "Christopher", "Roo", "Tiger", "Owl", "Zelda", "Crystal"];
// ```
// Sort the array based on alphabetical order from `a → z`.

const sortingName = (arr) => {
    for(let i =0; i<arr.length; i++) { //no need to get arr.length-1 as we only use outer loop to reinitiate the innerloop
        for (let j=0; j<arr.length-1; j++) { //need to get arr.length-1 otherwise the loop will go out of the index range
            if (arr[j]>arr[j+1]) {
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(sortingName(testNames));

// **Bonuses**

// 1. Once you've wrote down your pen and paper solutions, create functions to solve the problems above with javascript.
// 2. Create a function that takes an array as a parameter. Order the array based off of the elements' length. Assume the elements are strings.

let testNameLength = ["Winnie", "Piglet", "Christopher", "Roo", "Tiger", "Owl"];

const sortingLength = (arr) => {
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length-1; j++){
            //console.log(arr[j].length);
            if (arr[j].length>arr[j+1].length){
                 let temp = arr[j];
                 arr[j] = arr[j+1];
                 arr[j+1] = temp;
            }
        }
    }
    return arr;
}

sortingLength(testNameLength);

