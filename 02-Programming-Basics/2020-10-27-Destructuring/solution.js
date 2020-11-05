// Q1

let arr = ["banana" , "cucumber", "bread", "cakes", "pizza"];

let [fruit, vegetable,...food] = arr;
console.log(fruit); 
console.log(vegetable); 
console.log(food); 


// Q2

 let Halloween = {
    fran : "witch",
    Saad : "Jon Snow",

}

const {fran : costume1, Saad : costume2} = Halloween;
console.log(costume1);
console.log(costume2);  
 
//Q3

let music = {
   name : "all american rejects",
   greatestHit : "move along",
   nationality : "american",
   genre : "pop"
   
}

function my_band({name, greatestHit, nationality, genre}){
console.log(name + " is an " + nationality + " band " + " and their greatest hit is " + greatestHit ); 
}

my_band(music);


//q4

let user = {
    name : "John",
    years : 30,
    
}

const {name, years, isAdmin = "false" } = user;
console.log(name);
console.log(years);  
console.log(isAdmin);


//Q5

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };


let arr_entries = Object.entries(salaries);
let arr_sorted = Object.values(salaries).sort((a,b) => a-b); 
function topSalary(x,y){
   var highestValue = y[y.length-1];
       for (let [key,value] of Object.entries(x)){
        if(value == highestValue){
            console.log(key); 
        }
        if(x == {}){
            return "what the hell";
        }
            
    }
}

console.log(topSalary(salaries,arr_sorted)); 

// Q5 without destructuring 
  /* let arr_values = Object.values(salaries);
  let arr_sorted = arr_values.sort(); 
  let arr_entries = Object.entries(salaries).flat();  */
  /* console.log (arr_entries); */

  /* function check(x,y){
      var highest_value = x[x.length-1];
       /* console.log(highest_value);  */
       /* var arr_final = [];
       for (var i = 0; i<=y.length-1;i++){
           if(y[i] == highest_value){
               arr_final.push(y[i-1]);  */
              /*  console.log(y[i-1]);
               return;  */
         /*        
           }
            }
            return arr_final;
        }
      

     

  console.log(check(arr_sorted, arr_entries));  */
  
   
 
  

 


  
  

