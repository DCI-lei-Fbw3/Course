/* product = {
    name : "Cheese",
    price : "$20",
    amount : 10,
    madeIn : "USA",
    my_function : function set(){
        for (x in product){
            if (x=="name"){
                this.name = "Bottle";
                console.log(this.name);
            }
            if(x == "madeIn"){
                this.madeIn = "China";
                console.log(this.madeIn); 
            }
        }

    }
}



console.log(product.my_function()); */


/* var product = {
    name : "Cheese",
    price : 20,
    amount : 10,
    madeIn : "USA",
    totalBill(){
        return this.price * this.amount;

    },
    setPrice(y){
        return y * this.totalBill(); 
    },
    
}


var temp = 0;
if (temp ==0){
function testFunc(){
    
    temp = product.setPrice(.3);
   
        return temp;
    
    
        
    
}
}
else{
    return;
}
console.log(testFunc());  */


/* let board = [[1, 2, 3],
["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
[true, false]
];

let board_1 = board.flat();
console.log(board_1);

console.log(board_1.length); 

for (let i =0; i<=board_1.length-1; i++){
  console.log(board_1[i]);
}
 */

 /* var doggo = {
     name : "doggy",
     breed : "german shephard",
     favouriteFood : ["cookies", "biscuits"],
     method : function(){
        
        for (i =0; i<=this.favouriteFood.length-1; i++){
             console.log(this.favouriteFood[i]);
         }
          
     }
    }
    
    console.log(doggo.method()); */


recipes = {
    ingredients : {
    butter: "100g",
    brown_sugar: "1kg",
    flour: "2kg",
        
},
    my_function : function (){
         for (x in recipes.ingredients){
            console.log(x); 
}
    }
}
recipes.ingredients.ginger = "1 ounce";


console.log(recipes.my_function());


