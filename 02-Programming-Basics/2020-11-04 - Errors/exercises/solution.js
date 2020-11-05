//Q1
/* class Dog {
  constructor(name) {
    this.name = name;
  }
  bark () {
      console.log(this.name + " says woof");
    };
  
    
}
    let fido = new Dog("fido");
    fido.bark();
    console.log(fido);  */



/* # Debugging Exercises

#### 2. Month Name
Create a function called `getMonthName`, which takes the number of the month as an argument (Jan = 1 - Dec = 12). Throw an error if a user inputs an invalid number as an argument.
* Example
* getMonthName(15) -> `Invalid Month Number!`
 */

 /* function getMonthName(month){
if (month<13 && month>0){
    return "are you nuts";
}
else{
    throw "Invalid Month Number!"; 

 }
 }
 console.log(getMonthName(13));  */


 /* # Debugging Exercises

#### 3. Reverse
Create a function that reverses a string. Throw a custom error if the user inputs another type as an argument.

* Example
* reverseString(2019) -> `ERROR! This is not a string!` */

/* function reverse(str){

    let check = typeof str;
    if(check != "string"){
        throw "Error! THis is not a string"
    }  

    else{
        var arr = str.split("");
        var arr_reverse = arr.reverse();
        var str_reverse = arr_reverse.join(" ");
        return str_reverse; 
        
    }   
   
   
}

console.log(reverse([2,3,4]));  */


/* Create a function that returns true if two arrays contain identical values, and false otherwise.

Someone wrote the following code:
```javascript
function compareArrays(arr1, arr2) {
  if (arr1 === arr2) {
    return true
   } else {
    return false
   }
}
```
* Why doesn't the code work?
* Fix the code (or restart) to solve the problem.

* Examples of output
* compareArrays([1, 2], [1, 3]) ➞ false
* compareArrays([1, 2], [1, 2]) ➞ true
* compareArrays([4, 5, 6], [4, 5, 6]) ➞ true
* compareArrays([4, 7, 6], [4, 5, 6]) ➞ false */


/* function compareArrays(arr1, arr2) {
    if (JSON.stringify(arr1)== JSON.stringify(arr2)) {
      return true
     } else {
      return false
     }
  } */
  /* console.log(compareArrays([1,2], [1, 3])) 
  console.log(compareArrays([1, 2], [1, 2])) 
  console.log(compareArrays([4, 5, 6], [4, 5, 6])) 
  console.log(compareArrays([4, 7, 6], [4, 5, 6]))  */

  /* # Debugging Exercises

  #### 5. Recursion
  The following code should get the sum of the array items, but it does not work. Fix it so that it will.
  ```javascript
  function sum(array) {
      let result = array.pop() + sum(array);
      return result;
  }
  
  console.log(sum([1, 2, 3]));
 */
  
/* function sum(array) {
    if(array.length ==0){
        return 0 ; 
    }
    let result = array.pop()+ sum(array); 
    return result;
}
console.log(sum([1, 2, 3,4])); */




/* # Permutations

Create a function that takes one parameter "word" (string).

And returns an array of strings, which represent every possible combination of the letters of the given word.

Hint: Most likely it will be a recursive approach.         

## Signature

`permutate(word: string): array[string]`

## Example

```javascript
permutate("abc"); */
/* => [
	'abc',
	'acb',
	'bac',
	'bca',
	'cab',
	'cba'
]
``` */

/* ## Bonus

Make the elements of the returned array unique. In other words, if there are some elements doubled, remove the duplicates. */


// 

// function permutation(string){
                                   
//                                 // n!/(n-r)! => 3*2*1 = 6  
// }

function perm(xs) {
    let ret = [];
  
    for (let i = 0; i < xs.length; i = i + 1) {
      let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
  
      if(!rest.length) {
        ret.push([xs[i]])
      } else {
        for(let j = 0; j < rest.length; j = j + 1) {
          ret.push([xs[i]].concat(rest[j]))
        }
      }
    }
    return ret;
  }
  
  console.log(perm("abc").join("\n"));