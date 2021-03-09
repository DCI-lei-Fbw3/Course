import logo from './logo.svg';
import './App.css';
//import Button from "react-bootstrap/Button" //a lot more effecient, because you do not want to call all the bootstrap code in every script 

import {Button, Container} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';

function App() {
const [count, setCount] = useState(0)
const color = count % 5 === 0 ? "blue": "red";

/* 
- If the dependency array is empty ([]), the callback is called only once. This is will also leave the color of the background permanantly red.
- If you leave out the dependency array (so meaning its "undefined"), the 
callback is called on every component render.
*/
useEffect(()=>{
document.body.style.backgroundColor = color
}, [color])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click button to change background color.
        </p>
        <p>
          You count is: {count}
        </p>

    

        <Container><Button variant = "primary" size= "lg" onClick={()=>{ setCount(count + 1)}} >Change</Button></Container>
      
      </header>
    </div>
  );
}

export default App;
