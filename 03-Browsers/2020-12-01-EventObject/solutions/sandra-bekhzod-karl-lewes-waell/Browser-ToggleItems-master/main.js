// TOGGLE TASK 



let table = document.querySelector(".table");
let button = document.querySelector("button");

button.addEventListener("click", () => { 
    if (button.textContent === "Hide Destinations"){
        
        table.style.display = "none";
        button.textContent = "Show Destinations";
    } else if (button.textContent = "Show Destinations") {
    
        table.style.display = "table";
        button.textContent = "Hide Destinations"; 
} 
}   
);


// SELECT TASK


// ![screenshot](select.gif)
//onclick do the following: 
// create a selected class and append it to the td where the event is occurring 
// and assign the "primary" class to the selected table row,
// and change the color of the font to white 
// remove the button  and replace it with a p tag with the message "you selected city"

let tableSelect = document.querySelector(".table");
tableSelect.addEventListener("click", selectCity)

function selectCity(e){
    let cities = this.children ;
    console.log(cities);
  
    for(let i = 0; i < cities.length; i++){
        cities[i].classList.remove("clicked");
    }
    if (e.target.classList === "city"){
        e.target.classList.add("clicked");
    }
}

// For next weekend: 
// figure out how to give the clicked class to just one child. 
// add the p element with the message 