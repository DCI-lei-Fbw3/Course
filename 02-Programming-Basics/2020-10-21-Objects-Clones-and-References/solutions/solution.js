/* person = {
    choice1 : "tea",
    choice2: "coffee",
    choice3: "milk"
}

console.log(Object.keys(person));
console.log(Object.values(person));


for (x in person){
    console.log(x);
}

for (x in person){
    console.log(person[x]); 
} */

/* let person = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",
    my_function(){
       return this.firstName + " " +this.lastName + " is a " + this.age + " years " + this.job + " in " + this.city; 
        
        
    }
  }

console.log(person.my_function());  */


/* let objecttoArray = {
    cats : 1,
    dogs : 2,
    turtles :4
}

console.log(Object.entries(objecttoArray));   */
 

/* let student = {
    name: "Mike",
    class: "4A",
    course: "English",
    my_function : function(){
        let empty_arr = [];
        for (x in student){
            if(x!="my_function"){
            empty_arr.push(x);  
        }
    }
        return empty_arr; 
    }
  }

  console.log(student.my_function());

 */
  /* let first = {
      firstName : "John"
  }

  let last = {
      lastName : "Smith"
  }



  function merge(x,y){
      return Object.assign(x,y);
  }

  console.log(merge(first,last));  */


  /* let person = {
    name: "John",
    job: "teacher",
    location : "germany",

  }

  let newPerson ={};

  Object.entries(person).map(entry =>{
      let key = entry[0];
      console.log(key);
      let value = entry[1];
      console.log(value);
       newPerson[value] = key;
  })

console.log(newPerson);   */


/* person = {
    a : 1,
    b : 2,
    c : 3,
}
newperson ={}
d = "z";
person['d'] = 4;
person[d] = 5; 
console.log(person);  */



 /* person = {
   key : true,
}
  

function my_function(x){
    
    arr_1 = Object.keys(x);
    arr_2 = Object.values(x);
var arr_main = [[],[]];
for (let i =0 ; i <arr_main.length-1 ; i++){
    for (var j=0; j<arr_1.length; j++){
        arr_main[i].push(arr_1[j]);
        }     
}

for (let i =arr_main.length-1 ; i <arr_main.length ; i++){
    for (var j=0; j<arr_1.length; j++){
        arr_main[i].push(arr_2[j]);
        }     
}
return arr_main;

}

console.log(my_function(person));  */
 
 
/* const keysAndValues = (obj) => [Object.keys(obj), Object.values(obj)]; */

/* person = {
    a : 2,
    b : 3,
    c : 4,
 }

function my_function(x){
    return [Object.keys(x), Object.values(x)]; 
}


console.log(my_function(person));  */

/* let person = {
    name: "John",
    job: "teacher"
  }

newPerson = {

}
function swap(x){
Object.entries(x).map(y => {
    let key = y[0];
    console.log(key);
    let value = y[1];
    console.log(value); 
    newPerson[value] = key; 
    

})
return newPerson; 
}
 
console.log(swap(person));  */



/* let newPerson = {

}
newPerson.a = 4; 
newPerson["b"] =5; 
c = 17
newPerson[c] = "Saad"; 
console.log(newPerson) */

/* Number = {
    min : 6,
    max : 10,
}

function check(x,y){
    arr_1 = Object.values(Number);
    arr_max = Math.max(...arr_1);    //5
    arr_min = Math.min(...arr_1);    //2
        
        if(y<arr_min || y > arr_max ){
            console.log("false");

        } 
    else{
        return "true"; 
    }
    
}
console.log(check(Number,11));  */


/* let arr = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
    ]

    var sum = 0
    for (let i = 0 ; i<=arr.length-1; i++){
sum = sum + ((arr[i].score)); 

}
console.log(sum); 
 */

/* function isNotEmpty(x){
    if(Object.entries(x).length>=1){
        return "true";
    }
    
    else{
        return false;
    }
}

console.log(isNotEmpty({a:1}));  */


/* function countLetter(x){
    var arr = [];
    var arrNew = Array.from(x);
        for (let i =0; i <=x.length-1; i++){  
            arr.push(((x.split(x[i]).length-1)));
    
    }
            
       var obj = Object.assign({},arr);
       var obj_reference = Object.assign({}, arrNew)
       arr_1 = Object.values(obj_reference)
       arr_2 = Object.values(obj)
       final_arr = []; 
       for (let j=0;j <=arr_1.length-1;j++){
           final_arr.push(arr_1[j] + arr_2[j])
       } 
const word = final_arr.join(" ");
const result = word.split(" ").map(w=>w.split(""));
return Object.fromEntries(result); 

}
console.log(countLetter("tree"));  */




/* function countLetters(x){
    let arr = [];
for (let i = 0; i<=x.length-1; i++){
       arr.push((x.split(x[i])).length-1); 
}
arr_reference = x.split("");
final_array = [];
for (let j = 0; j<=arr_reference.length-1; j++){
    final_array.push(arr_reference[j]+arr[j]);
}
const final = (final_array.map(w=>{
    return (w.split(""));

}))
return Object.fromEntries(final);

}
console.log(countLetters("Saad")); */


/* Details = {
    "Wool" : 40,
    "Knitting" : 15.5,
    "Bag" : 13.99
    


}

function freeShipping(x){
      var arr = Object.values(x);
      
      for (let i=0; i<=arr.length-1; i++){
          if(arr[i] > 50 || arr[i]+arr[i+1]>50){
              return "yes";
              
          }
                }
    return "No";
}

console.log(freeShipping(Details)); 
   */
  
  
  const programming = {
      languages: ["JavaScript", "Python", "Ruby"],
      isChallenging: true,
      isRewarding: true,
      difficulty: 8,
      jokes:
      "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
      my_function : function(){
         
                  if ((programming.isChallenging == true) && (programming.isRewarding == true)){
                  console.log("Learning the programming languages :" + programming.languages + " is rewarding and challenging");
                }
      }
    };
    
    
    arr = programming.languages;
    arr.push("Go");
    programming.languages = arr; 
    console.log(programming); 
    
    programming.difficulty = 7;
    console.log(programming);
    
    delete programming.jokes;
    console.log(programming); 
    
    programming.isFun = "true";
    console.log(programming); 
    
    arr = programming.languages;
    for (let i =0; i<=arr.length-1;i++){
        console.log(arr[i]); 
    } 
    
    
    for (x in programming){
        console.log(programming[x]); 
    }
    
    console.log("**********************"); 
    console.log(programming.my_function());   
    