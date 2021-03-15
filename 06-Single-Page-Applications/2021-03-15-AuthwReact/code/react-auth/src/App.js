import logo from './logo.svg';
import './App.css';

import {Container, Col, Row} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import Login from './Login';
import Register from './Register';


function App() {


  return (
    <>
 <Container>
   <Row>
     <Col className = "text-center">
        <h1>FbW3 React Authentication</h1>
        <section id ="navigation">
            <a></a>
        </section>
     </Col>
   </Row>

  </Container>
  <Row>
  <Col> <Register /> </Col>
  
  <Col> <Login /> </Col>
</Row>
</>
  )
}

export default App;
