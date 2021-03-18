import "./ProductCard.css";

function ProductCard (props) {
    return (
        <div className="ProductCard">
            <div className="ProductCardTitle">
                <span className="ProductCardName">{props.product.name}</span>
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
