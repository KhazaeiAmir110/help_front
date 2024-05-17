import React, {Component} from "react";

class Api_Test extends Component{
    constructor(){
        super();
        this.state = {
            date : ['Hellow ', 'Hellow']
        }
        // this.setState = this.setState.bind(this);
    }

    setStateHandler = () => {
        this.forceUpdate();
    }

    render(){
        return (
            <>
                <button onClick={this.setStateHandler}>Update</button>
                <p>{Math.random()}</p>
            </>
        )
    }
}

export default Api_Test;