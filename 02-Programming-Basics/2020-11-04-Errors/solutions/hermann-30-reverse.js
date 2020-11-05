/* # Debugging Exercises

#### 3. Reverse
Create a function that reverses a string. Throw a custom error if the user inputs another type as an argument.

* Example
* reverseString(2019) -> `ERROR! This is not a string!` */

console.log('********Solution using for loop*************');


/* const reverseString = (str)=>{
    
    if(typeof str !== 'string') return 'ERROR! This is not a string';
       else  {
         let result = '';
           for(let i = str.length-1; i >= 0; i--){
         result = result + str[i];
        } 
        return result;
    }
    
    
}
console.log(reverseString(236));
console.log(reverseString('Hermann')); */

console.log('********Solution using recursion *************');


const reverseString = (str)=>{
    
  if(typeof str !== 'string') return 'ERROR! This is not a string';
     else  {
       let result = (str.length === 1)? str: ''+ str[str.length-1] + reverseString(str.slice(0 , str.length-1));
      return result;
      }
  
  
}
console.log(reverseString(236));
console.log(reverseString('Hermann'));

