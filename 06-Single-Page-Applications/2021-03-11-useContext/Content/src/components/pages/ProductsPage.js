import { useContext } from "react";
import ProductCard from "../ProductCard.js";
import ProductsContext from "../../context/ProductsContext.js";

function ProductsPage () {
    // without passing props around, we can simply call useContext() with our context file to access the products
    // these products come from the provider (remember the "value" prop?)
    const { products } = useContext(ProductsContext);

    return (
        <>
            <h1>Products</h1>
            {products.map(product => <ProductCard product={product} />)}
        </>
    );
}

export default ProductsPage;
