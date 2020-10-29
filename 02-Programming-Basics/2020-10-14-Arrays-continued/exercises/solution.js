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

function pigLatin(x){
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

