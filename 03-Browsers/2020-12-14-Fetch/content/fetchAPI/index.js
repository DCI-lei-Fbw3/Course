/* 
Welcome Fbw3!
Reference: https://mockapi.io/projects
Reading assignment: https://javascript.info/promise-basics
Reading assignment: http://ccoenraets.github.io/es6-tutorial/promises/#:~:text=A%20promise%20is%20a%20holder,support%20for%20promises%20to%20JavaScript.
Reference: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

Third assignment: Please recreate the projhect below with your own data API from mockAPI
*/

/* Notes:
- Fetch requests by default are set to GET method
- I will try to Fetch data from my MockAPI (mockapi.io), and I will
(again) try to create an unordered list with the data response. 
- I will be using Fetch to get my data from the API
- The reponse of the Fetch request, will be in the shape of JSON
*/

function createNode (element){
    return document.createElement(element);
}

function append (parent, el){
    return parent.appendChild(el);
}

const ul = document.getElementById('user');
const url = 'https://5fd724129dd0db0017ee8da8.mockapi.io/test/users';

fetch(url)
  .then(response => response.json()) //Transform the data to JSON
  //.then(data => console.log(data)) //--> Comment this "data" out, beaucse you can only use the data object once in a fetch request
  .then(function (data){ //I want the reponse data to be the argument to this callback function
    //Create and append the li's to the ul
    let users = data; //storing reponse data to a variable
    return users.map(function(user){
        let li = createNode('li');//creates a list element
        let span = createNode('span'); //creates a span element
    
        span.innerHTML = `${user.name}`;// Make the HTML of our span to be the first and last name of the user 
        append(li, span);
        append(ul,li);
    })
  })
  .catch(function(error){
    console.log(error);
  });