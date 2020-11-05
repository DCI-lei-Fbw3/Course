# Debugging Exercises

#### 5. Recursion
The following code should get the sum of the array items, but it does not work. Fix it so that it will.
```javascript
function sum(array) {
    let result = array.pop() + sum(array);
    return result;
}

console.log(sum([1, 2, 3]));
```



