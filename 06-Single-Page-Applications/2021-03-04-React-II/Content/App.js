import './App.css';
import { useState } from "react";
import FrontPage from "./components/pages/FrontPage.js";
import LoginPage from "./components/pages/LoginPage.js";
import ProductsPage from "./components/pages/ProductsPage.js";
import ProductsDetailsPage from "./components/pages/ProductsDetailsPage.js";
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // we create a custom component that checks the user's login state.
  // if they are not logged in, we return a redirect to the login page,
  // otherwise we return the route.
  // we pass all props from our custom component to the Route component
  // to have the same "interface" as the Route
  const ProtectedRoute = (props) => {
    if (!loggedIn) return <Redirect to="/login" />
    return <Route {...props} />
  };

  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            {/* by using NavLink instead of Link we can provide a activeClassName, that will be added to the currently active path/link */}
            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/login">Login</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/products">Products</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/products/12">Product No. 12</NavLink></li>
            <li><a href="/products">Products ({"<a>"}-tag, does reload!)</a></li>
          </ul>

          {/* for demonstration purposes only: we add a button to switch from logged in to not logged in state */}
          <button onClick={() => setLoggedIn(!loggedIn)}>Log in</button>
          {loggedIn ? <p>Logged in</p> : <p>Not logged in</p>}
        </nav>

        <Switch>
          <Route path="/" component={FrontPage} exact />
          <Route path="/login" component={LoginPage} />

          {/* we can redirect from one path to another */}
          <Redirect from="/notebooks" to="/products" />
          {/* ...or use multiple paths to redirect from */}
          <Redirect from={["/articles","/laptops"]} to="/products" />

          {/* the implementation of our custom component looks similar to the Route component */}
          <ProtectedRoute path="/products" exact component={ProductsPage} />
          <ProtectedRoute path="/products/:productId" exact component={ProductsDetailsPage} />

          {/* When the requested path does not match any of the Routes above, we display a Component that renders an error message */}
          <Route component={() => <h1>404 - Page not found</h1>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
