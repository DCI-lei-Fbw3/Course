// The following line makes sure your styles are included in the project. Don't remove this.
//import '../styles/main.scss';
// Import any additional modules you want to include below \/
//var recipeData = require('./data.js');
// var recipeJson = JSON.stringify('recipeData');

import { recipesCakes, recipesBis, recipesBread } from './data.js';

// \/ All of your javascript should go here \/

const cakes = document.getElementById('cakes');
const biscuits = document.getElementById('biscuits');
const bread = document.getElementById('bread');

function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', recipesCakes, true);
    console.log(allCakes);
    
    xhr.onload = function(){
    console.log('READYSTATE: ', xhr.readyState);
    if(this.status == 200){
        cakes.innerHTML = this.responseText;
        } else if(this.status = 404) {
            cakes.innerHTML = 'Not Found';
    }
}

    xhr.onerror = function(){
        console.log('Request Error ....');
    }

    xhr.send();
}

loadData();
