import { useContext } from "react";
import "./ProductCard.css";
import ProductsContext from "../context/ProductsContext.js";

function ProductCard (props) {
    // we can access "test" from our context right inside this component
    // we only need to import the context file and pass it to the useContext() function in order to extract "test"
    const { test } = useContext(ProductsContext);

    return (
        <div className="ProductCard">
            <div className="ProductCardTitle">
                <span className="ProductCardName">{props.product.name}<br/>{test}</span>
                <span className="ProductCardArticleNo">{props.product.articleNo}</span>
            </div>

            <p>{props.product.description}</p>

            <p className="ProductCardPrice">{props.product.price}</p>
        </div>
    );
}

ProductCard.defaultProps = {
    product: {
        articleNo: "xx-0000",
        name: "Product Name",
        description: "Product Description",
        price: 1111.11,
    },
};

export default ProductCard;
