import { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";

import axios from "axios";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => {
	const [products, setProducts] = useState([]);
	const [login, setLogin] = useState(false);
	const [loginDetails, setLoginDetails] = useState({});

	useEffect(() => {
		axios
			.get("http://localhost:5000/products") // add the url from your backend sever
			.then((response) => setProducts(response.data));
	}, []);

	return (
		<div className="App">
			<Router>
				<Header loginDetails={loginDetails} />
				<Switch>
					{/* <Route path="/products" exact>
						{login ? (
							<Products products={products} />
						) : (
							<Form setLogin={setLogin} />
						)}
					</Route> */}

					<Route path="/products" exact>
						{login ? (
							<Products products={products} />
						) : (
							<Redirect to="/" />
						)}
					</Route>

					<Route path="/" exact>
						<Form
							setLogin={setLogin}
							setLoginDetails={setLoginDetails}
						/>
					</Route>

					<Route
						path="/products/:articleNo"
						component={ProductDetails}
					/>
					<Route component={NotFound} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
