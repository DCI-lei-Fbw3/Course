import logo from './logo.svg';
import './App.css';

//import {Button, Container} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';

function App() {
  const API_ENDPOINT= "https://5fd724129dd0db0017ee8da8.mockapi.io/test/users";

  const [resp, setResp] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    //before the data is being Fetched, the component is still loading
      setLoading(true);
      fetch(API_ENDPOINT)
      .then(data => data.json())
      .then(data => {
        console.log(data)
        setResp(data)})
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
            Click button to change background color.
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
