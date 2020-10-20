/* Box = {
    volume : function (width, height, length){
        return width * height* length; 
    }

}



console.log(Box.volume(5,6,8)); 


cityFacts = {
   
    sentence : function(name, population, continent){
        return name + " has a population of " + population + " and located in " + continent  ;
    } 
}


console.log(cityFacts.sentence("paris", "2.5M", "Europe"));  */


/* Product = {
costPerUnit : 225.89,
sellPerUnit : 550.00,
inventory : 100,

profit : function(){
return Math.round((this.sellPerUnit-this.costPerUnit)*this.inventory);    
}

}

console.log(Product.profit());  */


/* car = {
    a : "1",
    b : "2",
    c : "3",

    hasKey : function(y){
       
    if (!Object.keys(car).includes(y)){
        return false;

    }
    else{
        return true; 
    }
}
    
    }

console.log(car.hasKey("1"));  */


// object exercise 06 - international greetings
var GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina",
    my_function : function greeting (name){
      
        if(!Object.keys(GUEST_LIST).includes(name)){
            return "Hi, I am a guest"
        }

        if(Object.keys(GUEST_LIST).includes(name)){
            
               for (x in GUEST_LIST){
                   
               if(x == name){
                   
                   return "Hi, My name is " + name + " and I am from " + (GUEST_LIST[x]);
               }
           }
            }
            
        }
            
        }
   
    console.log(GUEST_LIST.my_function("Norman")); 





