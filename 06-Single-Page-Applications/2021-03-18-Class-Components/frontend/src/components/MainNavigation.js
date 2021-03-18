import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import "./MainNavigation.css";

function MainNavigation () {
    const {loggedIn, logout} = useContext(UserContext);

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className="MainNavigation">
            <ul>
                <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/login">Login</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/products">Products</NavLink></li>
                {loggedIn && <li className="LogoutButton"><button onClick={handleLogout}>Log out</button></li>}
            </ul>
        </nav>
    );
}

export default MainNavigation;
