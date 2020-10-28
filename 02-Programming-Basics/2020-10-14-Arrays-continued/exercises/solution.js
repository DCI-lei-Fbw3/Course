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
    console.log(arr_sub);
    for (var j=0; j<=arr_sub.length-1;j++){
        let inner = arr_sub[j];
        for(var k =0; k<=inner.length -1;k++){
                console.log(j,k, "=", inner[k]);
            }
        }
        }
    
    
  


console.log(pigLatin("Cats are great pets")); 

