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
    let arr = Array.from(x);
    console.log(arr); 
    for (let i =0 ; i<=arr.length-1;i++){
        if(arr[i]==" " && arr[i+1]!="" ){
            console.log(i); 
        }
    }

    var arr_cat = arr.slice(0,4);
    for (let i = 0 ; i<=arr_cat.length-1;i++){
        if(arr_cat[i] != "a" || arr_cat[i] != "e" ||arr_cat[i] != "i" ||arr_cat[i] != "o"){
            arr_cat[arr_cat.length-1] = arr_cat[0]+"ay";
            arr_cat.shift();
        }
    }
    var arr_cat = arr.slice(5,8);
    for (let i = 0 ; i<=arr_cat.length-1;i++){
        if(arr_cat[i] == "a" || arr_cat[i] == "e" ||arr_cat[i] == "i" ||arr_cat[i] != "o"){
            arr_cat[arr_cat.length-1] = arr_cat[i] + "way";
            arr_cat.shift();
        }
    }
    return arr_cat; 
}

console.log(pigLatin("Cats are great pets")); 