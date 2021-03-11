import './App.css';
import { useContext } from "react";
import FrontPage from "./components/pages/FrontPage.js";
import LoginPage from "./components/pages/LoginPage.js";
import ProductsPage from "./components/pages/ProductsPage.js";
import { Switch, Route, Redirect } from "react-router-dom";
import AppHeader from "./components/AppHeader.js";
import ProductsProvider from "./context/ProductsProvider";
import UserContext from "./context/UserContext";


function App() {
  // we get the login state from UserContext
  const {loggedIn} = useContext(UserContext);

  const ProtectedRoute = (props) => {
    if (!loggedIn) return <Redirect to="/login" />
    return <Route {...props} />
  }

  return (
    <div className="App">
      <AppHeader />

      {/* every component inside our provider can use the context (but does not have to) */}
      <ProductsProvider>
        <main>
          <Switch>
            <Route path="/" component={FrontPage} exact />
            <Route path="/login" component={LoginPage} />
            <ProtectedRoute path="/products" component={ProductsPage} exact />
            <Route component={() => <h1>Not found</h1>} />
          </Switch>
        </main>
      </ProductsProvider>
    </div>
  );
}

export default App;
