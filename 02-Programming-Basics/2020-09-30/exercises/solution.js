/* let persons = ["Albert Einstein", "Lise Meitner", "Gene Simmons", "Patrick Swayze", "Alice Cooper", "Ronny James Dio", "Bruce Dickinson", "Marcus Miller", "Nathan East", "Al di Meola", "Gloria Estefan", "Naima Husseini", "Alin Coen", "Tina Dico"]; */



/* function comparison(a, b) {
    var splitA = a.split(" ");       // ["Albert", "Einstein"]
    var splitB = b.split(" ");       // ["Lise", "Meitner"]
    var lastA = splitA[splitA.length - 1];  // "Einstein"
    var lastB = splitB[splitB.length - 1];   //"Meitner"
    /* console.log(lastA);
    console.log(lastB); */
   /*  if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
}

let persons = ["Albert Einstein", "Lise Meitner", "Gene Simmons", "Patrick Swayze", "Alice Cooper", "Ronny James Dio", "Bruce Dickinson", "Marcus Miller", "Nathan East", "Al di Meola", "Gloria Estefan", "Naima Husseini", "Alin Coen", "Tina Dico"];
var sorted = persons.sort(comparison);
console.log(sorted);  */ 

/* function comparison(a,b){
   var a = a.toUpperCase();
   var b = b.toUpperCase();
   console.log(a);
   console.log(b);
   console.log(a.charCodeAt());
   console.log(b.charCodeAt());

   if(a<b) 
   return -1;
   if(a>b)
   return 1;
   return 0;
}


let fruits  = ["Banana", "Orange", "Apple", "Mango", "Strawberry"];
fruits.push("apple");
fruits.push("bananas");
console.log(fruits.sort());
var z = "20";
console.log(z.charCodeAt()); */
 

/* function abc(x,y){

var ggg = x.toUpperCase();
var second_fruit = y.toUpperCase();
console.log(ggg);
console.log(second_fruit);
    if(ggg<second_fruit){
        return -1
    }

    if(ggg>second_fruit){
        return 1
    }

    return 0;
}


let numbers = ["fruits", "banana", "apple", "strawberry", "Apple", "Banana"];
console.log(numbers.sort(abc)); */
 

/* let flattened = [[1,2,3], [4, 5], [6]].reduce(
    ( accumulator, currentValue ) => accumulator.concat(currentValue),
    []
  )

console.log(flattened); */



/* function say_hi(){
    return "hi";
}

function greeting(x,y){
    return x() + y;
}

console.log(greeting(say_hi, " Saad")); */


// your own loop

/* function loop(value,testFunction, updateFunction,bodyFunction){
    
    while(testFunction(value)){
        
        bodyFunction(value);
        
        value = updateFunction(value);
        
    }
    
}


console.log(loop(3, (n) => n > 0, (n) => n - 1, console.log));  */


 /* function loop (value, testFunction, updateFunction, bodyFunction){

while(testFunction(value)){
    bodyFunction(value);
    value = updateFunction(value);
}
}

console.log(loop(3, (n)=>(n>0), (n)=> (n-1), console.log)); */
 

/* function loop(value, var_10, var_11, var_13){
    while(var_10(value)){
                                           // var_10 = test
                                           //var_11 = update 
                                           //var_13 = body
var_13(value);
value = var_11(value);
}
}

function test_function(n){
return n > 0;
}

function update_function(t){
    return t-1;
}

function body_function(p){
    console.log(p);
}

loop(3,test_function,update_function, body_function); */


numbers = [10,4,5,2,9];
     
function test(z){
return z<10;
  
}

function every(x,y){
for (let i =0; i < x.length; i++){
    
    
if(!y(x[i])){
    console.log("false");
    return;
}


} 
     console.log("true");  
        }
       
console.log(every(numbers,test));