import logo from './logo.svg';
import './App.css';
//import Button from "react-bootstrap/Button" //a lot more effecient, because you do not want to call all the bootstrap code in every script 

import {Button, Container} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Container><Button variant = "primary" size= "lg" active>Press here</Button></Container>
      
      </header>
    </div>
  );
}

export default App;
