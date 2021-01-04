/* 
Welcome Fbw3!
Reference: https://mockapi.io
Reading assignment: https://javascript.info/promise-basics
Reading assignment: http://ccoenraets.github.io/es6-tutorial/promises/#:~:text=A%20promise%20is%20a%20holder,support%20for%20promises%20to%20JavaScript.
Reference: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
Reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

*/

/* Notes:
- Fetch requests by default are set to GET method
- I will try to Fetch data from my Google Sheet (using sheet2api.com), and I will
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

    //To POST data to the API/backend
    //Reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST
    //To Watch: https://vimeo.com/96425312
    
    /* 
    With POST requestions, you need:
    - Add headers, which have the request options,
    - Add a body, which has the data to be sent/POSTed
    - When you POST something using fetch, you should add headers, and a body into the request itself,
    - Stringify your body before POSTing it to the API,
    - The sytax for fetching a POST request is: fetch (url, <OPTIONS>)
    */

    //Let's create some new data, here we take it statically. You could, e.g., take this data from a <form>

let newData = {
    "id": "54",
    "createdAt": "2020-12-14T09:50:40.316Z",
    "name": "Taimur Khan 3",
    "avatar":"www.jjj.com"
  };

/* let request = new Request(url, {
    method: 'POST',
    body: JSON.stringify(newData),
    headers: new Headers()
}); */

/* fetch(url, 
    {
    method: 'POST',
    body: JSON.stringify(newData),
    headers: {
        'Content-Type': 'application/json',
    }
})
    .then(function(){
    //Handle response we get from the API 
    });
 */
    // fetch  being handled by https://sheet2api.com/v1/template.js
    //To GET data from the API/backend

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


  /* To-Dos:
  - Read up on HTTP Post method, and using POST in Fetch
  - Set up a google sheet API
  - Connect it it your HTML
  - Create a form that will take name, time, and date and store it to the google sheet (which will be our database)
  - The best implementation will get to be the class 1-1 feedback signup form.
  */