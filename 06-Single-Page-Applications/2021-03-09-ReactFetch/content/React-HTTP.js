//Welcome FbW3
//Topic: React - useEfect and Fetch Requests
//Reference: 


// useEffect - Creating fetch requests

/* 
- If the dependency array is empty ([]), the callback is called only once. 
- If you leave out the dependency array (so meaning its "undefined"), the 
callback is called on every component render.
*/


function App() {
  const API_ENDPOINT= "https://5fd724129dd0db0017ee8da8.mockapi.io/test/users";

  const [resp, setResp] = useState([]); //initially I set the useState(null), however we need array inorder to work with array mapping
  const [loading, setLoading] = useState(false);


  useEffect(()=>{ // STEP 1
    //before the data is being Fetched, the component is still loading
      setLoading(true);
      fetch(API_ENDPOINT) //STEP 2 
      .then(data => data.json())
      .then(data => {
        console.log(data)
        setResp(data)}) //STEP 3 is to save the data in a state variable
      .catch(()=>{
        setLoading(false)
      });
      //console.log(resp)
  }, [])
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            The list of names from your API: (STEP 4)
          </p>
          <div>
          {
           resp.map((d,i) => <p key={i+1}>{d.name}</p>)
         }
      
          </div>
  
      
        
        </header>
      </div>
    );
  }

    
    export default App;

    // Steps to fetch data into your react components and state
    
   // NOTE: make sure to have a useState() with an empty array inside to be able to use the map function later on


// STEP 1
  /* 
  - Create a Fetch/Axios request in a useEffect hook (make sure you you take the json data out before step 2, as done above)
  - If you want your Fetch to only be called once,  make sure your dependienies are an empty array 
  */

// STEP 2

/* 
  - Create the HTTP reques (here its done using Fetch).
  - Be careful with the promises!!
*/

// STEP 3

/* 
- This is where you will take the Fetched data, and will pass it to the state variable (decalred on top)
- Make sure that what is being passed to state variable (which is an array here) is in exactly the format you want it to be

*/

//STEP 4

/* 
- Now that your data is the state of your React app, you are read to render it in the JSX
- For this, you can use the Array.map function, to map your data to HTML elements. 
*/

// Fetch vs Axios

  /* 
  - The reason I am using Fetch here is because Fetch is available to almost all browsers. 
  - Fetch's body = Axios' data --> one less thing to worry about
  - Fetch's body has to be stringifed many times to be usable, Axios data contains the object.
  - Fetch has not url in the request object, Axios has url in request object.
  - Fetch request is ok when the response object contains the "ok property", Axios request is ok by default when the response is a 200. 
  */

  /* 
  Closing note:

  There are a ton of different ways to create HTTP requests in the browser. Only a few work with React.
  Here is a comrehensve comparison of different HTTP request libraries. 
  
  https://www.javascriptstuff.com/ajax-libraries/

  */
