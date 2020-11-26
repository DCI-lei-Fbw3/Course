let mainArr = document.querySelectorAll("html, body, body *");   
  
  // convert to an array using Array.from() 
let collectionArray = [];
Array.from(mainArr).forEach(function(element) { 
           collectionArray.push(element);
     }); 
   console.log(collectionArray);
    
