import { Component } from "react";
import "./ProductCard.css";

class ProductCard extends Component {
    // in this example we can see that props will be passed as an argument to the constructor
    // so whenever we use our component and pass props, they end up in this constructor
    // and will then be available in this.props
    // in this case we could also remove the constructor here as this is already implemented in the Component class that we extend
    constructor (props) {
        super(props);
        this.props = props;
    }

    render () {
        return (
            <div className="ProductCard">
                <div className="ProductCardTitle">
                    <span className="ProductCardName">{this.props.product.name}</span>
                    <span className="ProductCardArticleNo">{this.props.product.articleNo}</span>
                </div>

                <p>{this.props.product.description}</p>

                <p className="ProductCardPrice">{this.props.product.price}</p>
            </div>
        );
    }
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
