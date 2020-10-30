/* function nestArray(max){
    var arr_empty = [];
    for (let i = 0; i<1; i++){
        arr_empty.push([]);
            for (let j=0;j<max;j++){
                arr_empty.push([]);
            }  */


            /* for (let j=0;j<arr_empty_1.length;j++){
                arr_empty.push([i]);

            } */
   /*  }
    
    return arr_empty; 
}

/* console.log(nestArray(2));  */

/* let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
  ];

for (let i = 0 ; i<board.length;i++){
    let arr_1 = board[i];
        for (let j=0; j<arr_1.length; j++){
            console.log(arr_1[j])
        } 
} */

/* doggo = {
    Name : "Dobermann",
    Breed : "German Shephard",
    favourite_food : ["Pizza", "Brownie", "Kuchen"],
    my_function(){
        doggo.favourite_food.map(x=> console.log(x));
    }
}

console.log(doggo.my_function());  */


/* recipes = {
    ingredients : {
        butter : "1kg",
        sugar : "100g",
        flour : "200g",

    }
}

recipes.ingredients.ginger = "2000g";

for (x in recipes.ingredients){
    if(x == "sugar"){
        recipes.ingredients["brown sugar"]= recipes.ingredients[x];
        delete recipes.ingredients[x];
    }
}
console.log(recipes);  */

function pigLatin(str){
    let arr = str.split(" ");
    let arr_sub = [];
    for (let i =1; i<= arr.length; i++){
        arr_sub.push(arr.slice(i-1,i));
        
    }
    
    function check(x){
        let arr = x.join("");
        let arr_2 = arr.split("");
       return arr_2; 
       

}    
const arr_bigger = arr_sub.map(check);               // 
var final_arr = [];
for (let k = 0 ; k<arr_bigger.length; k++){
   
    var arr_cat = arr_bigger[k];
    console.log(k, arr_cat);
    // first scenario 
    if(arr_cat[0]!="a" && arr_cat[0]!="e" && arr_cat[0]!="i" && arr_cat[0]!="o" && arr_cat[0]!="u"){
            for (let j = 1 ; j<arr_cat.length; j++){
             final_arr.push(arr_cat[j]);             
                          
            }
            
            final_arr.push(arr_cat.shift().toLowerCase()+"ay");
        }
        else{
            if(arr_cat[0]=="a" || (arr_cat[0]=="e" || arr_cat[0]=="i" || arr_cat[0]=="o" || arr_cat[0]=="u")){
            
            for (let u = 0 ; u<arr_cat.length; u++){
                final_arr.push(arr_cat[u]);             
                             
               }
               final_arr.push("way");
        }
        
       /*  if(arr_cat[0]!="a" || arr_cat[0]!="e" || arr_cat[0]!="i" || arr_cat[0]!="o" || arr_cat[0]!="u"){
        const last_letter = arr_cat[0].toLowerCase();
       final_arr.push(last_letter);
        final_arr.push("ay"); 
        } */
        // 2nd scenario 

        /* for (let u = 0 ; u<arr_cat.length; u++){
            if(arr_cat[0]=="a" || (arr_cat[0]=="e" || arr_cat[0]=="i" || arr_cat[0]=="o" || arr_cat[0]=="u")){
                final_arr.push(arr_cat[u]);
                            
              }
          }
          if(arr_cat[0]=="a" || (arr_cat[0]=="e" || arr_cat[0]=="i" || arr_cat[0]=="o" || arr_cat[0]=="u")){
              
          final_arr.push("way"); 
          }

        } */
    
     
}
    
}
let finalArr = final_arr;
const joined = finalArr.join(" ");
/* let FinalArray = joined.split("");  */ 
let FinalArray = joined.split(" ");
return FinalArray.join(" ").replace(" ", "").replace(" ", ""); 
/* return FinalArray;  */
/* for (let value = 0; value <FinalArray.length; value++){
    if(FinalArray[value].length ==1){
        console.log(FinalArray[value]+FinalArray[value+1]+" ");
    }
    else{
        if(FinalArray[value].length >2){
            FinalArray[value] + " ";
        }
    }
    return FinalArray; 
}; */

}

console.log(pigLatin("Cats are great pets"));






// first scenario 
/* for (let j = 1 ; j<arr_cat.length; j++){
    if(arr_cat[0]!="a" || arr_cat[0]!="e" || arr_cat[0]!="i" || arr_cat[0]!="o" || arr_cat[0]!="u"){ */
        /* console.log(arr_cat[0]); */
        /* final_arr.push(arr_cat[j]);
        
                    
      }
      
  }
  
  if(arr_cat[0]!="a" || arr_cat[0]!="e" || arr_cat[0]!="i" || arr_cat[0]!="o" || arr_cat[0]!="u"){
  const last_letter = arr_cat[0].toLowerCase();
 final_arr.push(last_letter);
  final_arr.push("ay"); 
  } */
  // 2nd scenario 

  /* for (let j = 0 ; j<arr_cat.length; j++){
      if(arr_cat[0]=="a" || (arr_cat[0]=="e" || arr_cat[0]=="i" || arr_cat[0]=="o" || arr_cat[0]=="u")){
          final_arr.push(arr_cat[j]);
                      
        }
    }
    if(arr_cat[0]=="a" || (arr_cat[0]=="e" || arr_cat[0]=="i" || arr_cat[0]=="o" || arr_cat[0]=="u")){
        
    final_arr.push("way"); 
    }

  }


return final_arr;

}



console.log(pigLatin("Cats are great pets")); */





















































































/////////////////////////////////////////////////////////////////////////////////////
        /*  if(arr_cat[0]=="a" || (arr_cat[0]=="e" || arr_cat[0]=="i" || arr_cat[0]=="o" || arr_cat[0]=="a")){
            const last_letter = "way"; */
            /* console.log(arr_cat) */
            /*  final_arr.push(last_letter);  */
            /*  console.log(final_arr);  */
            
            /*   } */
            
            
            






 // first scenario 
       /*  for (let j = 1 ; j<arr_cat.length; j++){
          if(arr_cat[0]!="a" || arr_cat[0]!="e" || arr_cat[0]!="i" || arr_cat[0]!="o" || arr_cat[0]!="u"){
              /* console.log(arr_cat[0]); */
             /*  final_arr.push(arr_cat[j]);
              
                          
            }
            
        }
         */
       /*  if(arr_cat[0]!="a" || arr_cat[0]!="e" || arr_cat[0]!="i" || arr_cat[0]!="o" || arr_cat[0]!="u"){
        const last_letter = arr_cat[0].toLowerCase();
       final_arr.push(last_letter);
        final_arr.push("ay"); 
        } */
        // 2nd scenario 

       /*  for (let j = 0 ; j<arr_cat.length; j++){
            if(arr_cat[0]=="a" || (arr_cat[0]=="e" || arr_cat[0]=="i" || arr_cat[0]=="o" || arr_cat[0]=="u")){
                final_arr.push(arr_cat[j]);
                            
              }
          }
          if(arr_cat[0]=="a" || (arr_cat[0]=="e" || arr_cat[0]=="i" || arr_cat[0]=="o" || arr_cat[0]=="u")){
              
          final_arr.push("way"); 
          }  */