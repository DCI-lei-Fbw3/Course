import { useState, useEffect } from "react";
import axios from "axios";
import ProductsContext from "./ProductsContext.js";

function ProductsProvider ({children}) {
    // we can create a state as we normally do in other components
    const [products, setProducts] = useState([]);

    // we use an empty dependency array to call this function only once
    useEffect(() => {
        // call our API to get products
        axios.get("http://localhost:4400/products")
            .then(response => setProducts(response.data))
            .catch(error => console.log(error));
    }, []);

    // we return the "Provider" component from the context and pass a value
    // the value can have any ...well, value, even the state from above
    // since we wrap the component around others in App.js, we need to also return the children from the props
    // (react passes the wrapped components in props.children automatically)
    return (
        <ProductsContext.Provider value={{
            products,
        }}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsProvider;
