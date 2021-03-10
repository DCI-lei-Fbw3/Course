import { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginPage({ loggedIn, setLoggedIn }) {
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        setLoggedIn(true);
        history.push("/products");
    };

    const handleLogout = () => {
        setLoggedIn(false);
        history.push("/");
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

            {!loggedIn
                ? <form onSubmit={handleLogin}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username" required value={username} onChange={handleUsernameInput} /><br/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" required value={password} onChange={handlePasswordInput} /><br/>

                    <input type="submit" value="Log in" />
                </form>
                : <button onClick={handleLogout}>Log out</button>
            }
        </>
    );
}

export default LoginPage;
