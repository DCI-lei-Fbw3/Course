/* function toCamelCase(x){
    let arr = Array.from(x);
    for (let i = 0; i<=arr.length-1; i++){
        if(arr[i] == "_"){
            (arr[i]) = "";
            ((arr[i+1] = (arr[i+1].toUpperCase())));
        }
    }
return arr.join("");
}


console.log(toCamelCase("arr_sorted")); */

/* function pigLatin(x){
    let arr = x.split(" ");
    let arr_empty = [];
    for (let i=1; i<=arr.length; i++){
        arr_empty.push(arr.slice(i-1,i)); 
    }

    let arr_sub = arr_empty;
    //console.log(arr_sub);
    for (var j=0; j<arr_sub.length;j++){
        let inner = arr_sub[j];
        //console.log(j, "value is", inner[0]);
        
             inner.forEach(function(item,index,array){
                 console.log(item,index);
             });
        }
        }
    
    
  


console.log(pigLatin("Cats are great pets")); 
 */

/* let arr = ["Ali", "Bakar", "Fahd"];


console.log(arr.map(x=>("Hello " + x)));
console.log(arr.forEach(function (element,index){
    console.log(element +  " is at " + index );
}));  */

//q3

/* let cities = ["Berlin", "Lahore", "Paris", "London"]

console.log(cities.join(" , ")); */

/* et arr = [6,9,10,20];

console.log(arr.map(function(x){
    if (x%2==0){
        return x-1;
    }
    else{
        return x+1;
    }
})) */


//q5

/* let arr = ["matt", "sara", "lara"];

function capitalize(x){
    let first_letter = x.slice(0,1).toUpperCase();
    let rest_letters = x.slice(1,x.length).toLowerCase();
    return first_letter+rest_letters; 
    
}
console.log(arr.map(capitalize)); */

//q6

/*  let arr = [2,2,2,2];


uniqueArray = arr.filter(function(value, index, self) {
    return self.indexOf(value) == index;
})

console.log(uniqueArray); */


//q7




function check(x,y){
    var value = x; 
    var arr_empty = [];
        for (let j=0;j<y;j++){
            arr_empty.push(value);
        }
    return arr_empty; 
}

console.log(check("example",3));