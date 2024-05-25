import React, {Component} from "react";
import ReactDOM from "react-dom";

class Api_Test extends Component{


    // forceUpdate
    setStateHandler = () => {
        this.forceUpdate();
    }

    // find dom node
    findDomNodeHandler = () =>{
        document.getElementById('item1').style.color='red';
    }

    doubleCluck = ()=>{
        document.getElementById('item1').style.color='black';
    }

    render(){
        return (
            <>
                {/* forceUpdate */}
                <button onClick={this.setStateHandler}>Update</button>
                <p>{Math.random()}</p>


                {/* find dom node */}
                <h3>Find Dom Node</h3>
                <button onClick={this.findDomNodeHandler} onDoubleClick={this.doubleCluck}>Update Color</button>
                <div id="item1">This is a Item One</div>
            </>
        )
    }
}

export default Api_Test;