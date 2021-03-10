import './App.css';
import { useState } from "react";
import FrontPage from "./components/pages/FrontPage.js";
import LoginPage from "./components/pages/LoginPage.js";
import ProductsPage from "./components/pages/ProductsPage.js";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import AppHeader from "./components/AppHeader.js";
import ProductsProvider from "./context/ProductsProvider";


function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  const ProtectedRoute = (props) => {
    if (!loggedIn) return <Redirect to="/login" />
    return <Route {...props} />
  }

  return (
    <div className="App">
      <Router>
        <AppHeader />

        {/* every component inside our provider can use the context (but does not have to) */}
        <ProductsProvider>
          <main>
            <Switch>
              <Route path="/" component={FrontPage} exact />
              <Route path="/login" component={() => LoginPage({loggedIn, setLoggedIn})} />
              <ProtectedRoute path="/products" component={ProductsPage} exact />
              <Route component={() => <h1>Not found</h1>} />
            </Switch>
          </main>
        </ProductsProvider>
      </Router>
    </div>
  );
}

export default App;
