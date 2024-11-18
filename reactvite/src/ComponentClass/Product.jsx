import {Component} from "react";
import PropTypes from "prop-types";

class Product extends Component {
    render() {
        return (
            <>
                <h1>
                    Hello {this.props.product.name}!
                </h1>
                <h2>
                    {this.props.product.title} <h4>{this.props.product.price}</h4>
                </h2>
            </>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string,
        price: PropTypes.number,
    }),
    available: PropTypes.bool.isRequired,
    offer: PropTypes.bool,
}


export default Product;