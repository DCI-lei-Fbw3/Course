import { useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";
import axios from "axios";
import universalCookie from "universal-cookie";

function UserProvider ({children}) {
    const history = useHistory();
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    const login = (email, password) => {
        // in this function we change the login logic
        // please also see that since we isolated the logic over here,
        // we do not have to change anything in LoginPage

        // we do an axios post request to the login endpoint
        axios.post("http://localhost:4400/login", {
            email,
            password,
        })
            .then(response => {
                // in the response there is no cookie, because:
                // 1. we are on a different host (localhost:3000 !== localhost:44000)
                // 2. the token cookie is flagged as httpOnly
                console.log({ response });

                // to have a persistent login state, we can create a cookie on our own
                // the only value we need to store is the expiration
                // the browser prevents us from accessing JWT directly because of the httpOnly flag
                // this way we keep the token secure
                const cookie = new universalCookie();
                cookie.set("expires", 300);
                setUsername("User");
                setLoggedIn(true);
                history.push("/products");
            }) // 2xx
            .catch(error => console.log(error)); // 4xx
    };

    const logout = () => {
        setLoggedIn(false);
        setUsername("");
        history.push("/");
    };

    return (
        <UserContext.Provider value={{
            loggedIn,
            username,
            login,
            logout,
        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
