import React, {Component} from "react";
import ReactDOM from "react-dom";

class Api_Test extends Component{


    // forceUpdate
    setStateHandler = () => {
        this.forceUpdate();
    }

    // find dom node
    findDomNodeHandler = () =>{
        let eleman = document.getElementById('itme1')
        ReactDOM.findDOMNode(eleman).style.color = 'red'
    }

    render(){
        return (
            <>
                {/* forceUpdate */}
                <button onClick={this.setStateHandler}>Update</button>
                <p>{Math.random()}</p>


                {/* find dom node */}
                <h3>Find Dom Node</h3>
                <button onClick={this.findDomNodeHandler}>Update Color</button>
                <div id="item1">This is a Item One</div>
            </>
        )
    }
}

export default Api_Test;