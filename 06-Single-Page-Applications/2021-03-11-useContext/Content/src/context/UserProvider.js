import { useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";

function UserProvider ({children}) {
    // we can use useHistory() in this Provider because in index.js <UserProvider> is a child of <Router>
    const history = useHistory();
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    // we can define functions in here to make them reusable across our components
    const login = (user, pass) => {
        setUsername(user);
        setLoggedIn(true);
        history.push("/products");
    };

    const logout = () => {
        setLoggedIn(false);
        setUsername("");
        history.push("/");
    };

    // we do not need to expose "setLoggedIn" or "setUsername",
    // instead we share login() and logout() in the Context and keep the logic inside this Provider
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
