import { useContext } from "react";
import ProductCard from "../ProductCard.class.js";
import ProductsContext from "../../context/ProductsContext.js";

function ProductsPage () {
    const { products } = useContext(ProductsContext);

    return (
        <>
            <h1>Products</h1>
            {products.map(product => <ProductCard product={product} key={product.articleNo} />)}
        </>
    );
}

export default ProductsPage;
