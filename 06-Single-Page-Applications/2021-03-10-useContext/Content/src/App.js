import './App.css';
import { useState } from "react";
import FrontPage from "./components/pages/FrontPage.js";
import LoginPage from "./components/pages/LoginPage.js";
import ProductsPage from "./components/pages/ProductsPage.js";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import AppHeader from "./components/AppHeader.js";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const ProtectedRoute = (props) => {
    if (!loggedIn) return <Redirect to="/login" />
    return <Route {...props} />
  }

  return (
    <div className="App">
      <Router>
        <AppHeader />

        <main>
          <Switch>
            <Route path="/" component={FrontPage} exact />
            <Route path="/login" component={() => LoginPage({loggedIn, setLoggedIn})} />
            <ProtectedRoute path="/products" component={() => ProductsPage({loggedIn})} exact />
            <Route component={() => <h1>Not found</h1>} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}


export default App;
