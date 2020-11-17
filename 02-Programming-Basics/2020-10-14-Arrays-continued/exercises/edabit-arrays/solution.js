/* function getFirstValue(x){
    for (let i = 0; i <=x.length; i++){
        if(x[i] ==""){
            return 0;
        }
        else{
            return x[i];
        }
    }
}

console.log(getFirstValue([-500,2,3]));
 */

/* let arr_2 = [1,2,3,4];
console.log(arr_2.reverse()); */

/* function reverse(x){
    var arr = [];
    for (var i = 0; i<=x.length-1; i++){
       
       arr[i] =  x[x.length-1-i];   // arr[0] = x[4-1-1];
       
    }
    
    return arr;
} 

console.log(reverse([1,2,3,4]));   */

/* function getLastItem(x){

    let check = x[x.length-1] != "" ? x[x.length-1] : "false"
return check;
}
console.log(getLastItem([1,2,3,"duck"]));
 */

/* function search(x,y){
     for (let i = 0 ; i <= x.length; i++){
         if(x[i] == y){
             return i;
         }
        
     }
        
            return -1

        }
 


 console.log(search([1,2,3], 2));  */

/* function check(x,y){
     for (let i = 0; i<=x.length; i++){
         if(x[i] == y){
             return "true";
         }

     }
     return "false";
 }

 console.log(check([1,2,3,4], 5)); */

/* function monthName(x){

    if(x==1){
        return "January";
    }
    if(x==2){
        return "February";
    }
    if(x==3){
        return "March";
    }
    if(x==4){
        return "April";
    }
    if(x==5){
        return "May";
    }
    if(x==6){
        return "June";
    }
    if(x==7){
        return "July";
    }
    if(x==8){
        return "August";
    }
    if(x==9){
        return "September";
    }
    if(x==10){
        return "October";
    }
    if(x==11){
        return "November";
    }
    if(x==12){
        return "December";
    }

    else{
        return "wrong input"
    }


}

console.log(monthName(12));
 */

/* function negate(x){
  for (let i = 0; i <=x.length; i++){
      if(x[i]<0){
         
          x[i] = x[i];
      }
      if(x[i]>0){
          x[i] = -x[i];
      }
     if(x[i] == ""){
         return "empty";
     }
     
    }
  return x;
     }
 
console.log(negate([-1,2,3,4])); */

/* let arr = [44,32,86,19]

function diffMaxMin(x){
    return Math.max(...x) - Math.min(...x);

}

console.log(diffMaxMin(arr)); */

// ask Thomas

/* let arr = [53, 182, 435, 591, 637];

function unlucky13(x){
return x%13!=0;
}

console.log(arr.filter(unlucky13)); */

//  The Greater Numbers

/* let arr = [0,10,3];

function findGreatest(x,y){
    let storage = [];
for (i = 0; i <=arr.length-1; i++){
    if(x[i] > y){
        storage.push(x[i]);
    }
}
return storage;
}

console.log(findGreatest(arr,4)); */

// for the longest word

/* let str = "this is a web development course";
var str_2=[];
function longestWord(x){
    let arr = x.split(" ");
    for (let i = 0 ; i <= arr.length -1; i++){
    str_2.push(arr[i].length);
    
    
    }

    

    var  j = str_2.indexOf(Math.max(...str_2)) ;
    return arr[j];
    
    
}

console.log(longestWord(str)); */

// reverse

/* function reverse(x){
    var str = x.toString();
    var arr = str.split("");
    var rev = arr.reverse();
    var str_= rev.join("");
    return parseFloat(str_);
    
}

console.log(reverse(34532)); */

// Vowels

/* function findVowels(x){
    var arr = Array.from(x);
    var arr1 = [];
    for (let i =0; i <=arr.length-1; i++){
        
        if(arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u"){
            var arr_2 = arr1.push(arr[i]);
    
    }

}
return arr_2;
}
console.log(findVowels("this is an apple")); */

//Missing Number

/* function missing(x){
   var len = x.length; 
    //n
   var Total = ((len+2)/2) * (len+1);
var sum = 0;
for (let i = 0 ; i <= len-1; i++){
    sum = sum + x[i];

}
return "the missing number is " + (Total - sum);

}
let arr = [2,3,4,5,6,7,8,9,12] ;
console.log(missing(arr));
 */

// cubed

/* function cubed(x){
    let sum = 0;
 for (let i =0; i <=x.length-1; i++){
     if(x[i]==""){
         return 0
     }
     else{
         sum = sum + Math.pow(x[i],3);
     }
 }

 return sum;
}

console.log(cubed([])); */

// dictionary
/* let arr = ["button", "breakfast", "border"];

function createFilterCallback(needle) {
  return function (x) {
    // this must follow the signature of the callback-function as defined
    // in the documentation of array.filter
    return x.includes(needle);
  };
}


callbackFunction = createFilterCallback("bu");
console.log(arr.filter(callbackFunction));
 */
// even number generator

/* function even(x){
    
var arr =[];
var arr1 = [];
for (var i = 2; i <=x; i++){
if(i%2==0){
arr.push(i);
}
else{
    arr.push();
}

}
return arr;
}

console.log(even(5)); */

// alphabetical order

/* function alphaOrder(x){
    let arr = Array.from(x);
    let arr_1 = arr.sort();
    return arr_1.join("");
}

console.log(alphaOrder("webdev")); */

//file 2

/* function isFour(x){
    
    if(x.length == 4){
        return x;
       
    }
    
}

let arr = ["John", "James", "Jack", "Jeanne"];
console.log(arr.filter(isFour)); */

// Months

/* function monthName(x){
    if(x==1){
        return "January";
    }
    if(x==2){
        return "February";
    }
    if(x==3){
        return "March";
    }
    if(x==4){
        return "April";
    }
    if(x==5){
        return "May";
    }
    if(x==6){
        return "June";
    }
    if(x==7){
        return "July";
    }
    if(x==8){
        return "August";
    }
    if(x==9){
        return "September";
    }
    if(x==10){
        return "October";
    }
    if(x==11){
        return "November";
    }
    if(x==12){
        return "December";
    }
}

console.log(monthName(6)); */

//amplify the multiples of 4

/* function amplify(x){
    var arr = [];
    for (let i = 1; i<=x; i++ ){
        if(i%4==0){
            arr.push(i*10);
        }
        else{
            arr.push(i);
        }
    } 
    return arr;
}

console.log(amplify(25)); 
 */
// one is not like the others

/* function unique(x) {
  let multipleCharacter = [];

  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x.length; j++) {
      if (i != j && x[i] == x[j]) {
        multipleCharacter.push(x[i]);
        break;
        /* console.log(multipleCharacter);  */
     /*  }
    }
  }

  function check(z) {
    if (!multipleCharacter.includes(z)) {
      return true;
    }
  }

  return x.filter(check);
}

let arr = [0, 0, 0.77, 1, 1];
console.log("the unique number is " + unique(arr)); */ 


// word ranking


// c4n

/* function hackerSpeak(x){
    const regex = /a/gi;
    return x.replace(regex, 4).replace("e",3).replace("i", 1).replace("o", 0).replace("s",5);


}
console.log(hackerSpeak("programming is fun")); 
 */


// is symmetrical

/* function isSymmertical(x){
  
  
  
    var str = x.toString(); 
   var arr_1 = str.split(""); 

  var arr_2 = arr_1.map(Number);
   console.log(arr_2); */
  
 

/* console.log(arr_2[0]);
console.log(arr_reverse[0]);  */
  /* for (let i = 0 ; i<=arr_2.length-1 ; i++){
      if(arr_2[i] != arr_2[arr_2.length-1-i]){
          return "false";
      }
  }
  return true;
               
           
}  
    

   

console.log(isSymmertical(12567));  */

// repetition of unique assignment

/* let arr = [3,3,3,7,3,3];

function unique(x){
    let arr_1 = [];
for (let i = 0; i <=x.length-1; i++){
    for (let j = 0; j<=x.length-1;j++){
        if(x[i]==x[j] && x[i] ==x[j+1]){
            arr_1.push(x[i]);
            break;
            
        }
    }
}

function check(y){
    return !arr_1.includes(y);
}

console.log(x.filter(check));

}



console.log(unique(arr)); */


// repetition of dictionary task
/* let arr = ["button", "breakfast", "border"]; 

function dictionary(x){

return function check (y){
    
return (y.includes(x)); 
    
}
}



console.log(arr.filter(dictionary("bu")));
 */


/* let arr_1 =[1,2,7,9];
let arr_2 = [2,3,4,5,6]; 





function check(y){
    
    return function check_again(x){
return !y.includes(x);
    }


}

console.log(arr_2.filter(check(arr_1)));  */


/* let arr_1 =[1,2,3,4,5,6,7,8];
let arr_2 = [1,2,3,4]; 

function comparison(x,y){
    let arr_3 = []; 

for (let i = 0 ; i <=y.length-1; i++){
    for (let j=0; j<=y.length-1;j++){
        if(y[i]==x[j] ){
            arr_3.push(y[i]);

        }
    }
}

var arr_4 = arr_1.concat(arr_2);
console.log(arr_3);
function check(z){
    return function check_again(t){
    return !z.includes(t);
    
      
    
     
    }
}

console.log(arr_4.filter(check(arr_3)));
}

console.log(comparison(arr_1, arr_2));  */







/* function getDuplicateArrayElements(arr){
    var sorted_arr = arr.sort();
    var results = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i+1]) {
            results.push(arr[i]);
        }
    }
    return results;

}

var arr_1 = [1,3,2,2,4,4,5,5];

console.log(getDuplicateArrayElements(arr_1)); */



/* function duplicate(x){
    var arr_sorted = x.sort();
    var arr_2 = [];

    for (let i = 0 ; i <x.length-1; i++){
        if (arr_sorted[i] == arr_sorted[i+1]){
            arr_2.push(arr_sorted[i]);
        }
    }

    var repeated = arr_2;
    
    function check(y){
        return function(z){
            return !y.includes(z);  
        }
    }

    console.log(x.filter(check(repeated)));
}

var arr_1 = [1,2,3,4,5,2,5]

console.log(duplicate(arr_1));  */

// Q1

/* let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

function check(x){
for (let i =0 ; i<x.length; i++){
    console.log("row", i); 
    let sub_arr = x[i];
        for(var j=0;j<sub_arr.length;j++){
            console.log(sub_arr[j]);
        }
}
}

console.log(check(arr));


 function pigLatin(str){
    var arr_empty = [];








console.log(arr.map(check));

/* /* for (var i = 0; i<arr.length; i++){
    
    var arr_sub = arr[i];
    
    for (j=0;j<arr_sub.length;j++){
           
        if(arr_sub[0]!="a" && arr_sub[0]!="e" && arr_sub[0]!="i" &&  arr_sub[0]!="o" && arr_sub[0]!="u"){
            arr_empty.push(arr_sub[j+1]);
            
        }
        
        else{
            if(arr_sub[0]=="a" || arr_sub[0]=="e" || arr_sub[0]=="i" || arr_sub[0]=="o" || arr_sub[0]=="u"){
                arr_empty.push(arr_sub[j]);
            } 
        }
    }
}
return arr_empty;     


}
console.log(pigLatin("Cats are great pets"));  */



let str = "Cats are great pets";
let arr = str.split(" "); 
function check(value){
    
    if ( value[0] != "a" && value[0] != "e" && value[0] != "i" &&
    value[0] != "o" && value[0] != "u"){
         var a = value.substring(0,1).toLowerCase();
         var b = value+a+"ay";
         return b.substring(1);  
         
    }
    else{
        if ( value[0] == "a" || value[0] == "e" || value[0] == "i" ||
        value[0] == "o" || value[0] == "u"){ 
        return value +"way";

        }
}
}
let before_uppercase = (arr.map(check).join(" "));

// Extra practice part
function pigLatin(x){
    return x.charAt(0).toUpperCase() + x.substring(1); 
}
console.log(pigLatin(before_uppercase));




 