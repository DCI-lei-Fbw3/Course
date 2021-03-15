import logo from './logo.svg';
import './App.css';

import {Container, Col, Row} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import Login from './Login';
import Register from './Register';
import {Switch, Route, NavLink} from "react-router-dom";
//Import the free and authenticated components
import FreeComponent from './FreeComponent';
import AuthComponent from './AuthComponent';
import Account from './Account';
import ProtectedRoutes from './ProtectedRoutes';

function App() {


  return (
    <>
 <Container>
   <Row>
     <Col className = "text-center">
        <h1>FbW3 React Authentication</h1>
        <section id ="navigation">
            {/*  Using the NavLink component from React Router to avoid page refreshes*/}
            <a href="/" >Home</a>
            <a href="/free" >Free API</a>
            <a href="/auth" >Auth API</a>
        </section>
     </Col>
   </Row>

  {/*  create all the routes*/}

   <Switch>
     <Route exact path="/" component={Account}/>
     <Route exact path="/free" component={FreeComponent}/>
     <ProtectedRoutes exact path="/auth" component={AuthComponent}/>
   </Switch>

  </Container>
</>
  )
}

export default App;
