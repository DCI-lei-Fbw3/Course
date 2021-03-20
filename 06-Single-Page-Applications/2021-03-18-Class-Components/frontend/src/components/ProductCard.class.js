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
        this.state = {
            outOfStock: false,
        };
        // we need to bind "this" to our new function in order to have access to the state (would otherwise be out of scope)
        this.handleOutOfStockToggle = this.handleOutOfStockToggle.bind(this);
    }

    // in a Function Component the event handler would look something like this:
    // const handleOutOfStockToggle = () => {
    //     setOutOfStock(!outOfStock);
    // }
    // in our Class Component we define a new method inside our class and use this.setState
    handleOutOfStockToggle () {
        this.setState({ outOfStock: !this.state.outOfStock });
    }

    // to do something after the state or props changed, we would use useEffect in a Function Component in this manner:
    // useEffect(() => {
            // call api?
            // other logic?
    // }, [outOfStock]);
    // in Class Components React provides a special method that we utilize for this: componentDidUpdate:
    componentDidUpdate (prevProps, prevState) {
        // we can change the state or make api calls or do anything else
        // please keep in mind that we need to add certain conditions to check if we can execute our logic
        // otherwise we might cause an infinite loop: we update on change, which cases a change on which we update again...
        // we have access to the previous version of the props and of the state also
        if (prevState.outOfStock !== this.state.outOfStock) {
            // call api?
            // other logic?
            console.log({ prevProps, prevState });
        }

        if (this.state.outOfStock) {
            console.log("outOfStock changed to true");
        }
    }

    render () {
        return (
            <div className="ProductCard">
                {/* to render the paragraph only when outOfStock is true, we can use && like this: {condition && output} */}
                {/* when the condition returns false, the output is omitted on render */}
                {this.state.outOfStock && <p>Out of Stock! :-(</p>}
                <div className="ProductCardTitle">
                    <span className="ProductCardName">{this.props.product.name}</span>
                    <span className="ProductCardArticleNo">{this.props.product.articleNo}</span>
                </div>

                <p>{this.props.product.description}</p>

                {/* since we use a button tag to toggle the outOfStock state, we do not need to prevent the default event */}
                {/* the html button triggers no event we need to take care of in this case */}
                <button onClick={this.handleOutOfStockToggle}>Out of Stock</button>

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
