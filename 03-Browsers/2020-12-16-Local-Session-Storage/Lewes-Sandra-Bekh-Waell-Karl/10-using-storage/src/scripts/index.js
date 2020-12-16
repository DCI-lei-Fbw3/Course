// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import 'babel-polyfill';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/
import {Client} from './apiCall.js';
import {View} from './view.js';


// do we add an event listener to the input field? 
// put the value in the fetch function 
// that will give us the data 
// in the view js we put the data in the DisplayMovieonPage function as parameter 
// 
// inside the handler we make use of the two classes we have from the two js files? 
// the value of the input field becomes a parameter to the functions of the js files?

let client = new Client 

let view = new View 

let movieInput = document.getElementById('input'); 
movieInput.addEventListener("keypress", async (event)=>{
    //console.log(event.target.value);
    if (event.key === 'Enter') {
           let getMovieData = await client.getMovieData(event.target.value);
           //console.log(getMovieData); 
           view.displayMovieOnPage(getMovieData);
           let h2 = document.querySelectorAll('.movie-title').forEach(element => {
            console.log(element.textContent.toLowerCase());
            console.log(movieInput.value);

                if (element.textContent.toLowerCase() == movieInput.value) {
                    alert("don't!!")
           }});
           
        }
    }
)
    


let save = document.querySelector(".btn-save")