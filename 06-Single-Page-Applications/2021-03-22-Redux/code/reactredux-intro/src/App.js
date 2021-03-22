import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {connect} from "react-redux";

class App extends Component{
  
  /* state = {
    age: 27
  }
  ageUp = () =>{
    this.setState({
    ...this.state,
    age:++this.state.age  
    })
  }
  ageDown = () =>{
    this.setState({
    ...this.state,
    age:--this.state.age  
    })
  } */

  render(){
    return (
      <div className="App">
       <div className="age-label">
        You age: <span>{this.props.age}</span>
       </div>
       <button onClick={this.props.ageUp}>Age Up</button>
       <button onClick={this.props.ageDown}>Age down</button>
  
      </div>
    );    
  }
  
}

const mapStatetoProps = state =>{
  return{
    age:state.age
  }
}

const mapDispatchtoProps = dispatch =>{
  return{
    ageUp:() => dispatch({type: "AGE_UP", value:10}),
    ageDown:() => dispatch({type: "AGE_DOWN", value:20})
  }
 
}



export default connect(
  mapStatetoProps,
  mapDispatchtoProps
  )(App);
