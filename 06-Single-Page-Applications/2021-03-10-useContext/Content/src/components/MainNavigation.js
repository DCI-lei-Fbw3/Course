import { NavLink } from "react-router-dom";
import "./MainNavigation.css";

function MainNavigation () {
    return (
        <nav className="MainNavigation">
            <ul>
                <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/login">Login</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/products">Products</NavLink></li>
            </ul>
        </nav>
    );
}

export default MainNavigation;
