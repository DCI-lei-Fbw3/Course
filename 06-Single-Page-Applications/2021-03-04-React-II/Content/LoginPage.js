import { useState } from "react";

function LoginPage (props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        console.log({ username, password });
        props.setLoggedIn(!props.loggedIn);
        event.preventDefault();
    };

    const handleUsernameInput = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    };

    return (
        <>
            <h1>Login</h1>
            {props.loggedIn ? <p>Logged In</p> : <p>Not Logged In</p>}

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Username" required value={username} onChange={handleUsernameInput} /><br/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" required value={password} onChange={handlePasswordInput} /><br/>

                <p>{username}</p>
                <p>{password}</p>

                <input type="submit" value="Log in" />
            </form>
        </>
    );
}

export default LoginPage;
