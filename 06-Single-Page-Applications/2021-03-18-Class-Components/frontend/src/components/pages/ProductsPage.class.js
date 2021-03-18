import { Component } from "react";
import ProductCard from "../ProductCard.class.js";
import axios from "axios";

// to have the basic React functionality in our class, we "extend" the React Component class
// that means that we inherit all methods and properties
// we can override them and write our own methods
class ProductsPage extends Component {
    // we initialize the component with the constructor
    constructor (props) {
        // with super() we call the constructor of the class we extend
        // otherwise we would just override the Component class constructor (we still want to use it!)
        super(props);

        // to give this class a state, we set it up with this.state
        // it is an object that can contain multiple properties
        // the value we give them in here will be the "initial state"
        this.state = {
            products: [],
        }
    }

    // componentDidMount() will be executed as soon as the component is mounted
    componentDidMount () {
        axios.get("http://localhost:4400/products")
            .then(response => this.setState({ products: response.data }))
            .catch(error => console.log(error));
    }

    // when mounting or updating the component, render() is executed
    // and returns the output
    render () {
        return (
            <>
                <h1>Products</h1>
                {this.state.products.map(product => <ProductCard product={product} key={product.articleNo} />)}
            </>
        );
    }
}

export default ProductsPage;
