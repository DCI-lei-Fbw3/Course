// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/


// create a promise to use window.setTimeout (60 seconds)
// then display a modal 
// **Notes**: 
// * The user should be able to close the modal. ?? onclick?? 
// use alert?


// npm install 
//npm start



// here we create a function that takes the milliseconds as an argument: 
function wait(milliseconds) {
    // this function will return a new instance of a Promise class: 
    return new Promise(
        // the Promise constructor takes one argument and that is a callback function: 
        // that callback function can take up to 2 parameters: resolve & reject; 
        // here we use only one: (the second one is optional)
        (resolve) => {
            // the resolve callback is executed after a setTimeout 
            window.setTimeout(resolve, milliseconds);
        }
   ); 
}

// SECOND WAY: 
//function callback(resolve, reject) {
// function callback(resolve) {
//     window.setTimeout(resolve, 2000);
// }

let element = document.querySelector(".modal");

// here we call the function Wait 
wait(2000)
.then( () => element.style.display = "block");



// TO CLOSE THE POP UP: 

// add a click event to the close class
let close = document.querySelector('.close');
close.addEventListener("click", handler);
// inside the handler put the display none back 
function handler() {
    element.style.display = "none"
}
// ANOTHER WAY : 
// close.addEventListener("click", () => element.style.display = "none");
