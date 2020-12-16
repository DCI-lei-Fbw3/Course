const ul = document.getElementById('user');
const url = 'https://sheet2api.com/v1/nmrVHdKZRZO6/db'; // my sheet

// the fetch method takes the url as an argument
fetch(url)
    // The URL returns a response 
    // the response is the data fetched from the URL 
    // in the .then method we say: return the response (the data), and then convert that response (data) to json (something which is readable to us - an array of objects); 
.then(response => response.json()) 
  //we then use that data as an argument in the next .then method to make further use of it:
  .then(data => { 
    //storing response data to a variable (again, an array of objects)
    let users = data; 
    // because users is an array, we use the array method to access each array item which we will call "user": 
    return users.map(user =>{
        // we create the "li" and "span" elements because that's where we will store the information from the user:
        let li = document.createElement('li');
        let span = document.createElement('span'); 
        // we select the created span element, and inside it we store the user's data: 
        // we access all the values from the user object with Object.values
        // the then use the map method, to access each individual value and add a space between them: 
        span.innerHTML = `${Object.values(user).map(value =>" "  +value)}`;
        //we append the created elements to their parent elements: 
        li.append(span);
        ul.append(li);
    })
  })
  .catch(function(error){
    console.log(error);
  }); 

 