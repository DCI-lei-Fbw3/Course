//Fetch api exercise
document.getElementById('getLocalText').addEventListener('click', getLocalText);
document.getElementById('getWebText').addEventListener('click', getWebText);
document.getElementById('getLocalImage').addEventListener('click', getLocalImage);
document.getElementById('getWebImage').addEventListener('click', getWebImage);
document.getElementById('getLocalJSON').addEventListener('click', getLocalJSON);
document.getElementById('getWebJSON').addEventListener('click', getWebJSON);
document.getElementById('getGHapi').addEventListener('click', getGHPublicAPI);

function getLocalText(){
    fetch('Winnie.txt')
    .then((res) => res.text()) //the method when the source is a text
    .then((data) => {
    document.getElementById("database").innerHTML = data
    }) 
    .catch((err)=> console.log(err));
}

function getWebText(){
    fetch('https://www.w3.org/TR/PNG/iso_8859-1.txt')
    .then((res)=> res.text())
    .then((data)=> {
        document.getElementById("database").innerHTML = data
    })
    .catch((err)=> console.log(err));
}

function getLocalImage(){
    fetch('PoohBear.jpg')
    .then((res)=> res.blob())
    .then((data)=>{
        document.getElementById('winnie').src = URL.createObjectURL(data);
    })
}

function getWebImage(){
    fetch('https://media1.s-nbcnews.com/j/streams/2014/October/141028/1D274907098230-today-k9-mass-141028.fit-2000w.jpg')
    .then((res)=> res.blob())
    .then((data)=> {
        document.getElementById('puppy').src = URL.createObjectURL(data);
    })
 }

function getLocalJSON(){
fetch('users.json')
.then((res)=> res.json()) //this is a json file
.then((data) => {
    let output = '<h2>Users</h2>';
    data.forEach(function(user){    
    output += `
        <ul>
            <li>ID: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email}</li>
        </ul>   
        `;
    });
    document.getElementById("database").innerHTML = output;
    //if document.getElementById is given a variable outside of the function it is not reachable.
});
}


function getWebJSON(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>from Jsonplaceholder</h2>';
        data.forEach((post)=> {
            output += `
            <div> 
            <h3>${post.title}</h3>
            <p>${post.id}</p>
            <p>${post.body}</p>
            </div>
            `;
        });
        document.getElementById("database").innerHTML = output;     
    })
}

//not working, this is a json object
function getGHPublicAPI(){
    fetch('https://api.github.com/search/users?q=repos:%3E12+followers:%3C1000&location:uk+language:python&page=1&per_page=100')
    .then((res => res.json())
    .then((data) => {
        let output = '<h2> from Github Public API</h2>';
        let storage = data["items"];
        //console.log(storage);
        storage.forEach((ghusers)=>{        
            output+= `
            <div>
            <p>${ghusers.login}<p>
            <p>${ghusers.id}</p>
            </div>
            `;
        });
        document.getElementById("database").innerHTML = output;        
    }) 
    )   
}

// function addPost(e){
//     e.preventDefault();

//     let title = document.getElementById('title').value;
//     let body = document.getElementById('body').value;
    
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({title:title, body: body})
//     })
//     .then((res)=>res.json)
//     .then((data)=> console.log(data))
// }

function createNode (element){
    return document.createElement(element);
}

function append (parent, el){
    return parent.appendChild(el);
}

//const url = "https://sheet2api.com/v1/7i260eUkToGI/mydatabase/testSignup"

function addGoogleSheet() {
    preventDefault();

    // let idGoogle = document.getElementById('idGoogle').value;
    // let nameGoogle = document.getElementById('nameGoogle').value;
    // let dateGoogle = document.getElementById('dateGoogle').value;
    // let timeGoogle = document.getElementById('timeGoogle').value;

    let newData = {
        "id": "2",
        "student_name": "Piglet",
        "date": "2020-12-24",
        "time_slot":"14:00",
      };

    fetch(url, {
        method: 'POST',        
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json',             
        },  
        body: JSON.stringify(newData),
    })
    .then((data)=> {

    })

    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        let users = data;
         
        users.forEach((user)=>{
            let li = createNode('li');//creates a list element
            let span = createNode('span'); //creates a span element
        
            span.innerHTML = `${user.name}`;// Make the HTML of our span to be the first and last name of the user 
            append(li, span);
            append(ul,li);
        })
                    
       })
       .catch(function(error){
        console.log(error);
    }
)}
