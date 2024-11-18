import {Component} from "react";

class Product extends Component {
    render() {
        return (
            <h1>
                Hello {this.props.name}!
            </h1>
        )
    }
}
export default Product;