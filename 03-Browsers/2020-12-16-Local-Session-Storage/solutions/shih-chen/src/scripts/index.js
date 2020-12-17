// The following line makes sure your styles are included in the project. Don't remove this.
//import '../styles/main.scss';
//import 'babel-polyfill';

// Import any additional modules you want to include below \/
import { Client } from './apiCall.js';
import { View } from './view.js';
//import { data } from 'autoprefixer';

// the following part works after running npm run build
// var Client = require('./apiCall.js');
// var View = require('./view.js');

// \/ All of your javascript should go here \/

let getAPI = new Client();
let showMovie = new View();

let movieTitle = [];
let movieData = [];

let theInput = document.querySelector('input');
theInput.addEventListener('keyup', (event)=> {    
    if (event.key === "Enter"){    
    var theMovie = event.target.value;
     
    getAPI.getMovieData(theMovie)
    .then((data) => { 
        //check if the same movie title has been entered  
        if (!onlyOnce(data)){                               
        showMovie.displayMovieOnPage(data);  
        //movieTitle only contains the title of the movie, this is needed to compare if there is repetition of movie title
        movieTitle.push(data.Title); 
        //movieData has the whole array of the complete set of movie data
        movieData.push(data);    
        } 
        else (alert ("You already picked this movie!"))
        console.log(movieData);

        //let newMovieData = JSON.stringify(movieData); 
        //console.log(newMovieData)//newMovieArray(newMovieList);                         
        });   
    }  
})

function onlyOnce (something){
    let exists = false;
    for (let i=0; i<movieTitle.length; i++) {        
        if (movieTitle[i] == something.Title) {
            exists = true;           
        } 
        return exists;
    }    
}

// function newMovieArray (someinfo) {
//     console.log(someinfo)
// }


function toSave(){ 
document.querySelector('.btn-save').addEventListener("click", (()=>{ 
    let newMovieData = JSON.stringify(movieData); 
        localStorage.getItem("movieList", newMovieData);  
        //just to check if this function works.
        console.log("success!");          
        })
    )
}

toSave();

function toReset() {
    document.querySelector(".btn-reset").addEventListener("click", (()=>{        
        showMovie.removeDisplay();
        movieTitle = [];
        movieData = [];
        //this is only to check if both arrays have been reset to empty array
        console.log(movieTitle, movieData);
        }) 
    )   
}

toReset();


// let movieOrNot = new Promise (function(resolve, reject){
//    let theMovieData = Client.getMovieData(theMovie); 
//    resolve(() => {           
//         if(theMovieData.Response === "True"){        
//         theMovieData.forEach((filmdata)=> {
//         View.displayMovieOnPage(filmdata);        
//     });  
// }
//     reject(() => {
//         if(theMovieData.Response === "False"){    
//         return View.displayMovieOnPage(theMovieData);
//         }
//     });    
//     })
// }); 
