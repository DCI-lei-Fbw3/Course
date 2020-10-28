//Question 1

/* function tellFortune(children, name, location, title){
console.log("You will be an " + title + " in " + location + " and married to " + name + " with " + children + " kids" );
console.log("You will be an " + title + " in " + location + " and married to " + name + " with " + children + " kids" );
console.log("You will be an " + title + " in " + location + " and married to " + name + " with " + children + " kids" );
}

tellFortune(2, "Girl", "Germany", "Programmer");
 */

//Question 2

/* function calculateDogAge(human_age){
let calc_age = human_age * 7;
console.log("Your doggie is " + calc_age + " in dog years");
}

calculateDogAge(1);
calculateDogAge(2);
calculateDogAge(3); */

// Question 3

/* function calculateSupply(age, amount_per_day){

let max_age = 75;
let rest = max_age - age;

let total = Math.round(rest * 365 * amount_per_day);
console.log(total);
}

calculateSupply(35,2.5578785454);
calculateSupply(35,5);
calculateSupply(35,10); */

// Question 4

/* function calcCircumfrence(radius){  // radius in cm
let circum = 2 * Math.PI * radius;
console.log("The circumference is " + circum);
}

calcCircumfrence(5); 

function calcArea(radius){ // radius in cm
let area = Math.PI * Math.pow(radius,2);
console.log("The area is " + area);
}

calcArea(2); */

//Question 5

/* function celsiusToFahrenheit(temp){
    let temp_C = temp;
    let temp_F = temp_C * (9/5) + 32;
    console.log(temp_C + " in °C to °F is " + temp_F); 
}

celsiusToFahrenheit(40); */

/* function fahrenheitToCelsius(temp){
    let temp_F = temp;
    let temp_C = ((temp_F) - 32) * 5/9;
    console.log(temp_F + " in °F " + "is " + temp_C);
}

fahrenheitToCelsius(104); */

// excercise 2 - Q1

/* function mult(x,y){
    return x*y;
}

console.log(mult(2,3)); */

//Q2

/* let multi = function(x,y){
return x*y;
}
console.log(multi(2,3)); */

//Q3

/* let multi = (x,y) => {
return x*y;
}

console.log(multi(2,3)); */

//Q4

/* function remainder(x,y){
    return x%y; 
}
console.log(remainder(3,2));

let remain_1 = function(x,y){
    return x%y;
}
console.log(remain_1(3,2));

let remain_2 = (x,y) => {
return x%y;
}
console.log(remain_2(3,2)); */

// Excercise 3 - Q1

/* function valid(x, y) {
  if (isNaN(x)) {
    console.log("x is not a number");
  } else {
    console.log("x is a number");
  }
  if (isNaN(y)) {
    console.log("y is not a number");
  } else {
    console.log("y is a number");
  }
  if (isNaN(x)) {
    console.log("x values cannot be exponated");
  } else {
    console.log(x ** y);
  }
} 

valid(4, 2);  */

//Q2

/* let fruit = "apple";
function printFavoriteFruit() {
  let fruit = "oranges";
  return fruit;
}
console.log(printFavoriteFruit()); */

//Q3

/* function exponent(num_1, num_2) {
  var result = num_1 ** num_2;
} 

console.log(result); / */

//the variables let or var cannot be accessed from outside since they are block and function scoped respectively.



// Excercise 4

//Q1

/* function Q1(x){
    var sum = 0;
    for (let i = 1; i <=x; i++){
var sum = sum + i;
console.log(sum);

    }
}
Q1(600); */


// Q2

/* function numbers(x,y,z){
   
    if ( x === undefined && y === undefined && z === undefined){
        return 0;
    }
   
    if(y === undefined && z ===undefined){

return x ** 3;
    }

    if(z === undefined ){
        return (x **3) + (y ** 3)
    }
   
   
    else{
        
        return (x **3) + (y ** 3) + (z **3);
    }

    
}

console.log(numbers(2,4));
 */
// Q3

/* function isStr(x,y){
    for (let i = 0; i < 5 ; i ++){
            if (x.slice(i, i+1) == y.slice(i, i+1)){
    return "true";
            }
            else{
                return "false"
            }

    }
}

console.log(isStr("Hello", "He")); */

//Q4

/* function isLess(x){
return (x <=0) ? true : false

}

console.log(isLess(10)); */


//Q5

/* function occurences(x,y){
var b = [];
   for (let i = 0 ; i <=x.length; i++){
    
       if (x[i] == y){
       b.push(y);
       
       
       
       }
      
   }
   console.log(b);
   console.log(b.length);
 }

 occurences("this is a string", "i"); */
 


 // Q6

 /* function calcBaseToExponent(x,y){

if (x >= 0 && y >= 0){
    return x ** y
} 


else{
    console.log("please enter only positive integers");
}   
 }

 console.log(calcBaseToExponent(10,2)); */

 // Q7

 /* function dogAge(human_age){
let puppy_age =  human_age * 7;
console.log("Your dog is " + puppy_age + " years old in human years")
 
}

dogAge(4); */

// Q8

/* function snack(age, amount_per_day){
    let max_age = 80;
    let rest_life = max_age - age;
    return Math.round(rest_life * 365 * amount_per_day)
}

console.log(snack(35,2.558855)); */


//Q9

/* function isWaldoHere(x){
let y = x;
return y.match(/Waldo/gi) ? true : false
}

console.log(isWaldoHere("waldo is here?")); */


//Q10

/* function isEqualSlices(x,y,z){
    if(z*y == x){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEqualSlices(11,5,3)); */


//Q11

/* function check(t){
    let y = t;
    let status_1 = y.match(/o/gi);
    
    let status_1a = status_1.length;
    let status_2 = y.match(/x/gi);
    let status_2a = status_2.length;
    if (status_1a == status_2a){
        return true;
    }
    
    
    else{
        console.log("false");
    }
    
   
    
}

console.log(check("xXoo")); */

//Q12                            // using Wilson's theorem

/* function isPrime(x){
  var z = 1; 
  var t = x-1
                       
 for (let i = 0 ; i <=t-1; i++ ){
 
 var z =  z * (t-i) ; 
  
}

console.log(z); 

var Check = z;
console.log(Check); 
if (x===1){
    return "its not a prime number";
}
if (x===2 || x===3){
    return "its a prime number";
}
if(Check%x === 0 || x ===4 || x%2 ==0 || x%3 ==0 || x%5==0 || x%7==0 || x%11===0){
    return "its not a prime number";
}
    else{
        if((Check+1)%x ==0){
            return "its a a prime number"; */
        /* } */
       /*  if(Check%x===28){
            return "its not a a prime number";
        } */
       /*  else{
            return "its a a a a prime number";
        }
    }
 
 }
 
console.log(isPrime(103));  */


  // Rafa solution   

 // !Prime numbers in range
/* const isPrime = (num) => {
    for (let i = 2; i < num; i++) 
    if (num % i === 0) return false;
    return num > 1;
};
const primeInRange = (num) => {
let arr = [];
    for (let i = 2; i < num; i++) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    return arr;
};
console.log(...primeInRange(103)); */


// Q13

/* function StringCheck(r){
    let s = r;
    Array_1 = [];
    Array_2 =[];
    Array_3 = [];
    if(s.match(/@/gi)){
        console.log("@ symbol there");
    }
     
    
    else{
        console.log("@ symbol not there");
    }

    if(s.match(/./gi)){
        console.log(". symbol there");
    }
    else{
        console.log(". symbol not there");
    }
    if(s.endsWith(".com")){
        console.log(".com at the end");
    }
    else{
        console.log(".com not at the end, try again");
    }
    if(s.includes("@.") || s.includes(".@")){
        console.log("false");
    }
    else{
        console.log("all good");
    }


    if(s[s.length-1] === "@"){
        console.log("@ in the wrong place");
    }
    else{
        
    }
    
    
    if(s[s.length-1] === "." || s[0] === "." || s[0] === "@"){
        console.log(". in the wrong place");
    }
    else{
        console.log(". in the right place");
    }

    

    for (let i = 0 ; i <1 ; i++){
      for (let j = 0 ; j<=s.length ; j++ ){
        if(s[j] == "@"){
            Array_1.push("@");                
            
        }
        else{
           
        }
}
        if(Array_1.length > 1){
            console.log("too many @ values");
        }
        else{
            
        }
        


    }

    for (let k = 0 ; k <1 ; k++){
        for (let m = 0 ; m<=s.length ; m++ ){
          if(s[m] == "." && s[m+1] == "."){
              
              console.log(". values consecutively repeating");                
              
          }
          else{       
                  
        }
  }  
      }
      
      for (let q = 0 ; q <1 ; q++){
        for (let p = 0 ; p<=s.length ; p++ ){
          if(s[p] == "."){
              Array_3.push(".");                
              
          }
          else{
             
          }
  }
          if(Array_3.length > 2){
              console.log("too many . values");
          }
          else{
              
          }
          
   
      }
      
    
}


console.log(StringCheck("john.smith@gmail.com"));
 */


// prime number test

function isPrime(x){
        for(var j = 2; j<50; j++){
            if(x==j){
                continue;
            }
                if(Number.isInteger(x/j)){
                   
                    var str_1= "not a prime number";
                    var str_1a = (str_1.match(/not/gi).length >=1) ? "not a prime number" : "";
                    /* return str_1a; */
                    /* console.log(j + str_1a); */
                    return str_1a;
                    
                }
                
                
                
                }
               console.log("a prime number");
            }
        
        console.log(isPrime(12)); 
                
                /*  if(str_1a.length >=1){
                    return "not a a prime number";
                } */
                /* else{
                    console.log(j);
                    return "a prime number";
                } */
                
                
            
            
            
        
        /*  }  */
        
        
            
       /*  if(x%1 ==0 && x%x ==0 && Number.isInteger(25/5)){
            /* console.log(j + " NOT A PRIME NUMBER"); */
            /* console.log(j); */
            /* return "NOT A PRIME NUMBER"; */
            
        /* } */
       /*  else{ */
            /*   console.log(j + " A PRIME NUMBER"); */
            /* console.log(Number.isInteger((26/5))); */
            /* return "A PRIME NUMBER"; */
            
/*         }
    }
}  */


/* } */

        







