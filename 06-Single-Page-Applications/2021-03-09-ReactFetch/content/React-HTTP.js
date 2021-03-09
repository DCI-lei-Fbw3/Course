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

    useEffect(()=>{
        fetch(API_ENDPOINT)
        .then(response => response.json)
        .then(data => console.log(data))
        .catch(()=> )
    }, [])
    
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Click button to change background color.
            </p>
            <p>
            Your data is = {data}
            </p>
    
        
    
            <Container><Button variant = "primary" size= "lg" onClick={} >Change</Button></Container>
          
          </header>
        </div>
      );
    }
    
    export default App;
    