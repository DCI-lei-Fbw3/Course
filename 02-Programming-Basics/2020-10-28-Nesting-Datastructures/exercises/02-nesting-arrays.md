# Nesting Arrays

## 1. nestArrays(currDepth, maxDepth)

Create a function `nestArray(currDepth, maxDepth)` that creates an array holding another array, holding another array, until the current depth `currDepth` of the nesting reaches the maximum depth `maxDepth`.
Each array should in addition to the contained array have an entry for `currDepth`, only the final (leaf) array holds only the `currDepth`.

### Example

```javascript
nestArrays(0,2);
/* =>
[
    0,
    [
        1,  
        [
            2
        ],
    ],
]

*/
```

## 2. nestObjects(currDepth, maxDepth)

Create a function `nestObjects(currDepth, maxDepth)` that creates an object holding another object, holding another object, and so on, - until the current depth `currDepth` of the nesting reaches the maximum depth `maxDepth`.

Each object should have two attributes one for the contained object `nestedObj` and one attribute `currDepth` holding the according value. The final (leaf) object's nestedObj should be `null`.

### Example

```javascript
nestObjects(0,2);
/* =>
{
    currDepth: 0,
    nestedObj: {
        currDepth: 1,
        nestedObj: {
            currDepth: 2,
            nestedObj: null
        }
    }
}
*/

```

## 3. Bonus add Breadth
