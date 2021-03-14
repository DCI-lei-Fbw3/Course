import logo from './logo.svg';
import './App.css';

//import {Button, Container} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';

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
           resp.map(d => {
             return(<p>{d.name}</p>)
           } )
         }
      
          </div>
  
      
        
        </header>
      </div>
    );
  }

export default App;
