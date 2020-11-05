var names = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
var sortednames = names.sort();
console.log(sortednames); 


// 2. Create a function that takes an array as a parameter. Order the array based off of the elements' length. Assume the elements are strings.

//function length(arr) { 

    // var placeHolder = []

    // for (i=0; i<arr; i++) {

    //     [i].length(a, b) {return a-b};
    //     placeHolder.push[i];
    // }

    console.log(names.sort(function(a,b) {
    return a.length - b.length 
    }))
//}


// console.log(length(names))
const sorter = names.sort((a,b) => b.length - a.length)
console.log(sorter)


// # Bubble Sort

// Please implement the sorting algorithm "Bubble Sort" inside of a function `bubbleSort(arr)` which takes the array to be sorted as its single parameter, it should return the sorted array.

// For a description refer to:
// https://en.wikipedia.org/wiki/Bubble_sort

// ## sample code:

// ```javascript
let numbers = [9, 5, 7, 1, 0, 2, 4, 1, 6, 3, 8];
// // the "1" is doubled to have a test case

function bubbleSort(arr) {
    for(let j=0;j<arr.length;j++) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i]>arr[i+1]) {
                var temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                }
            }
        }      
        return arr;
    }

console.log(bubbleSort(numbers))
