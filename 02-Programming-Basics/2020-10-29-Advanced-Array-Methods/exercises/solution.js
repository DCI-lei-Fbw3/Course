/* const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
  ];

  function check(x){
      return x.amount;  
    
  }
  const reducer = (accumulator,currentValue) => accumulator + currentValue
  
  console.log(orders.map(check).reduce(reducer)); */

// q2
  /* const arrayOfNumbers = [3, 45, 6, 56, 7, 9];


  console.log(arrayOfNumbers.map(x=> x+1));
 */

 //q3

 /* let arr = [22,2,31,110,6,13];

 function filterEvens(x){
if (x%2==0){
    return x;
}
 }

 console.log(arr.filter(filterEvens)) */

//q4
 /* const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

function check(x){
    
    return function check_criteria(y){
        if(y.includes(x)){
            return y;
        }
    }
}


 const newArr = (friends.filter(check("ka")));
 var emp_Arr = [];
 for (let i = 0 ; i<newArr.length;i++){
     emp_Arr.push(newArr[i].charAt(0).toUpperCase()+newArr[i].slice(1)); 
 }
console.log(emp_Arr); */


 //q5

 /* let arr = [6,7,7];

function reducer(accumulator, currentValue){
return accumulator + currentValue; 
}
 console.log(arr.reduce(reducer)); */

 //q6

 /* let arr =[2,5,9,10,100];

 console.log(arr.map(x=> (Math.sqrt(x)))); */


 /* let arr = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];

 console.log(arr.sort((a,b)=> a-b));  */

 /* let arr = ["Fran", "Leon", "Ale", "Zakria", "Jenna", "Bleda", "Hadi"];

 console.log(arr.sort());  */


/*  let arr = ["SaadButt", "Muhammad Ali", "Ali"];
 

 console.log(arr.sort((a,b) => b.length-a.length)); */


/*  let numbers = [9, 5, 7, 1, 0, 2, 4, 1, 6, 3, 8]; */