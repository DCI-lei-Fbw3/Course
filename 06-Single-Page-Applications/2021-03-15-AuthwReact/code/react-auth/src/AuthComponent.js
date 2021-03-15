import React, { useState, useEffect } from 'react';
import {Button} from "react-bootstrap";
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
 
//get token generated on login
const token = cookies.get("TOKEN");


export default function AuthComponent(){
    //set an initial state for the message we will recieve after the API is called
    const [message, setMessage] = useState("");

    useEffect(()=>{
        //set configs for Axios and call auth-endpoint to authroize your token
        //send back token from browser to /auth-enpoint route on express server, where validation of token happens
        const config = {
            method: "get",
            url:"https://mongo-express-auth.herokuapp.com/auth-endpoint",
            headers:{
                Authorization: `Bearer ${token}`
            }
        }

        //make the API call
        axios(config)
            .then((result) =>{
             //assign the message in our result to the message we stored in the state above
             setMessage(result.data.message)   
            })
            .catch((error)=>{
                error = new Error();
            })

    },[])

    const logout = () => {
        //destroy the cookie
        cookies.remove("TOKEN", {path: "/"});
        //redirect user to the landing page
        window.location.href="/";
    }

    return(
        <div>
            <h1 className="text-center">Welcome to the authenticated component.</h1>

            <h3 className="text-danger">{message}</h3>

            <Button type = "submit" variant = "danger" onClick={() => logout()}>Signout</Button>
        </div>
    )
}