/* 
# Return the First Element in an Array
Create a function that takes an array and returns the first element.

## Examples

```
getFirstValue([1, 2, 3]) ➞ 1
getFirstValue([80, 5, 100]) ➞ 80
getFirstValue([-500, 0, 50]) ➞ -500
```

## Notes

The first element in an array always has an index of 0.

*/

//let getFirstValue = [1, 2, 3];

//console.log(getFirstValue[0]);
function getFirstValue(arr){
        return arr[0]
}

console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));

/* 
# Reverse an Array
Write a function to reverse an array.
​
## Examples

```
reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
reverse([]) ➞ []
```

## Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
*/

/* 
let arr = [1, 2, 3, 4];
console.log(arr.reverse()) 
*/

function getReverse(arr) {
    return arr.reverse();
}

console.log(getReverse([1, 2, 3, 4]));

/* 
# Return the Last Element in an Array

Create a function that accepts an array and returns the last item in the array.

## Examples

```
getLastItem([1, 2, 3]) ➞ 3
getLastItem(["cat", "dog", "duck"]) ➞ "duck"
getLastItem([true, false, true]) ➞ true
```

## Notes

Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.

*/

function getLastItem(arr) {
    return arr[arr.length - 1];
}

console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));

/*
# Find the Index (Part 1)

Create a function that finds the index of a given item.

## Examples

​```
search([1, 5, 3], 5) ➞ 1
search([9, 8, 3], 3) ➞ 2
search([1, 2, 3], 4) ➞ -1
```

## Notes

If the item is not present, `return -1`.
*/

/* 
let search = [1, 5, 3]
console.log(search.includes(5)) 
*/

/*
function search(arr, n) {
    if (!arr.includes(n))  return -1;
    else return arr.indexOf(n)
}

console.log(search([1, 5, 3], 5))
console.log(search([9, 8, 3], 3))
console.log(search([1, 2, 3], 4)) 
*/

function search(arr, n) {
    return arr.indexOf(n);
}

console.log(search([1, 5, 3], 5));
console.log(search([9, 8, 3], 3));
console.log(search([1, 2, 3], 4));

/*  # Check if an Array Contains a Given Number

Write a function to check if an array contains a particular number.

## Examples

```
check([1, 2, 3, 4, 5], 3) ➞ true
check([1, 1, 2, 1, 1], 3) ➞ false
check([5, 5, 5, 6], 5) ➞ true
check([], 5) ➞ false
```

​## Notes

    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab. */

function check(arr, n) {
    return arr.includes(n);
}

console.log(check([1, 2, 3, 4, 5], 3));
console.log(check([1, 1, 2, 1, 1], 3));
console.log(check([5, 5, 5, 6], 5));
console.log(check([], 5));

/* # Convert Number to Corresponding Month Name

Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

Number | Month Name
-------|-----------
1  | January
2  | February
3  | March
4  | April
5  | May
6  | June
7  | July
8  | August
9  | September
10 | October
11 | November
12 | December

​## Examples

​```
monthName(3) ➞ "March"
monthName(12) ➞ "December"
monthName(6) ➞ "June"
```

## Notes

    You can expect only integers ranging from 1 to 12 as test input.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab. */


/* function monthName(n) {

    if (n == 1) return "January"
    if (n == 2) return "February"
    if (n == 3) return "March"
    if (n == 4) return "April"
    if (n == 5) return "May"
    if (n == 6) return "June"
    if (n == 7) return "July"
    if (n == 8) return "August"
    if (n == 9) return "September"
    if (n == 10) return "October"
    if (n == 11) return "November"
    if (n == 12) return "December"
}

console.log(monthName(3))
console.log(monthName(12))
console.log(monthName(6)) */

function monthName(n) {
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[n-1];
}

console.log(monthName(3))
console.log(monthName(12))
console.log(monthName(6))

/* # Negate the Array of Numbers

Given an array of numbers, negate all elements contained within.

    Negating a positive value -+n will return -n, because all +'s are removed.
    Negating a negative value --n will return n, because the first - turns the second minus into a +.

## Examples

```
negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]
negate([-1, 2, -3, 4]) ➞ [1, -2, 3, -4]
negate([]) ➞ []
```

## Notes

If you get an empty array, return an empty array: `[]` */

function negate(arr) {
    let negatedArray = arr.map(value => -value);
    return negatedArray;
}

console.log(negate([1, 2, 3, 4]))
console.log(negate([-1, 2, -3, 4]))
console.log(negate([]))

/* 
# Difference of Max and Min Numbers in Array

Create a function that takes an array and returns the difference between the biggest and smallest numbers.

## Examples

```
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

diffMaxMin([44, 32, 86, 19]) ➞ 67
// Smallest number is 19, biggest is 86.
``` 
*/

function diffMaxMin(arr) {
    let arr1 = arr.sort((a, b) => {return a-b});
    return arr1[arr.length-1] - arr1[0];
}

console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));
console.log(diffMaxMin([44, 32, 86, 19]));

/* Array = [10, 4, 1, 4, -10, -50, 32, 21]

Array1 = Array.sort((a, b) => {return a-b})

console.log(Array1)
console.log(Array1[Array1.length-1])
console.log(Array1[0])

Array2 = (Array1[Array1.length-1] - Array1[0] )

console.log(Array2)

*/

/* # Unlucky 13

Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

## Examples

```
unlucky13([53, 182, 435, 591, 637]) ➞ [53, 435, 591]
// 182 and 637 are divisible by 13.

unlucky13([24, 316, 393, 458, 1279]) ➞ [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.

unlucky13([104, 351, 455, 806, 871]) ➞ []
// All numbers in the array are divisible by 13.
``` 
*/

console.log("unlucky13");

function unlucky13(arr) {
    return arr.filter(n =>  n % 13 == 0? false : true );
}

console.log(unlucky13([53, 182, 435, 591, 637]));
console.log(unlucky13([24, 316, 393, 458, 1279]));
console.log(unlucky13([104, 351, 455, 806, 871]));
