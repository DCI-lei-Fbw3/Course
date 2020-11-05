// # Debugging Exercises

// #### 5. Recursion
// The following code should get the sum of the array items, but it does not work. Fix it so that it will.
```javascript
function sum(array) {
    let result = array.pop() + sum(array);
    return result;
}

console.log(sum([1, 2, 3]));
```
//Method 1:
function sum(array) {
    if(array.length === 0) {
        return 0;
    } 
    else {
    let element = array.pop(); 
    let result = element + sum(array) ;
    return result;  
    }  
}
console.log(sum([1, 2, 3]));

//Method 2: 
function sum(array) {
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let result = (array.reduce(reducer))
    return result;
}

console.log(sum([1, 2, 3]));

