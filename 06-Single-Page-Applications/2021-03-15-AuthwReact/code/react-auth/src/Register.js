import './App.css';
import axios from 'axios';

import {Form, Button} from 'react-bootstrap';
import React, {useState} from 'react';

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
        //prevent the form from refreshing the whole page
        e.preventDefault();
        const config = {
            method: "post",
            url: "https://mongo-express-auth.herokuapp.com/register",
            data: {
                email,
                password
            }
        }
    
        axios(config)
            .then((result) => {
                setRegister(true);
            })
            .catch((err) => {
                err = new Error()
            })
    }

    

  return (
      <>
    <h2>Register</h2>
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" 
    name="email" 
    placeholder="Enter email" 
    value={email} 
    onChange={(e)=> setEmail(e.target.value)}
    />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" 
    name="password"
    placeholder="Password" 
    value={password} 
    onChange={(e)=> setPassword(e.target.value)}
    />
  </Form.Group>
  
  <Button variant="primary" type="submit" onClick={(e)=> handleSubmit(e)}>
    Submit
  </Button>
</Form>

{register ?(
    <p className="text-success">Congrats, you have registered!</p>
): (
    <p className="text-danger">You did not succeed to register :(</p>
)

}


</>
  )
}

export default Register;